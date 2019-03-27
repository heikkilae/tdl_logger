var express     = require('express');
var app         = express();
var backbone    = require('backbone');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file
var router = express.Router();

// get User model
var User = require('../models/user');

// password hash & verify
const bcrypt = require('bcrypt');
const saltRounds = 10;
var randtoken = require('rand-token') 

// secret variable
app.set('superSecret', config.secret); 

// store refresh tokens
global.refreshTokens =  {};

// route to authenticate a user (POST http://localhost:8080/api/auth)
router.post('/login', function(req, res){

    if(req.body.name && req.body.password)
    {
        // find the user
        User.findOne({where : {userName: req.body.name}}).then(user => {
            // User not found
            if(!user){
                res.json({ error: true, info: 'Authentication failed. User not found.' });
            }

            // user founds
            else if (user)
            {
                // check Password
                bcrypt.compare(req.body.password, user.passwd, function(err, result) {                
                    if (err) 
                    {
                        console.log(err);
                        res.json({ error: true, info: 'Authentication failed.' });
                    } 
                    else 
                    {
                        if(result)
                        {
                            const payload = {
                                id: user.id,
                                steamid: user.steamid
                            };
                            var token = jwt.sign(payload, app.get('superSecret'), {
                                expiresIn: 30
                            });
                            
                            var refreshToken = randtoken.uid(256);
                            refreshTokens[refreshToken] = req.body.name;

                            res.json({
                                error: false,
                                info: 'Enjoy your token!',
                                token: token,
                                refreshToken: refreshToken
                            });
                        }
                        else
                        {
                            res.json({ error: true, info: 'Authentication failed. Wrong password.' });
                        }
                    }
                })
            }
        })
        .catch(err => {
            console.error("Authentication error",err);
            return res.json({
                error: true,
                info: 'Unknown error when looking up username.'
            })
        })
    } else {
        res.json({error: true, info: 'User or password needed.'});
    }
});

// POST (requires: name, refreshToken)
router.post('/token', function (req, res, next){

    if(req.body.name && req.body.refreshToken)
    {
        var userName = req.body.name;
        var refreshToken = req.body.refreshToken;
        console.log("****/token******* list of refreshTokens", JSON.stringify(refreshTokens));

        if((refreshToken in refreshTokens) && (refreshTokens[refreshToken] == userName)) {
            User.findOne({where : {userName: userName}}).then(user => {
                var payload = {
                    id: user.id,
                    steamid: user.steamid 
                }

                var token = jwt.sign(payload, app.get('superSecret'), { 
                    expiresIn: 30 
                });

                return res.json({
                    error: false,
                    info: 'Enjoy your token!',
                    token: token
                })
            }) .catch(err => {
                console.error("Authentication error",err);
                return res.json({
                    error: true,
                    info: 'Unkown error when looking up username.'
                })
            })
        }
        else
        {
            return res.status(403).send({ 
                error: true, 
                info: "Refresh token or username doesn't match" 
            });
        }
    }
    else
    {
        return res.status(403).send({ 
            error: true, 
            info: "Refresh token or username doesn't found." 
        });
    }
})

router.post('/token/reject', function (req, res, next) {
    if(req.body.refreshToken)
    {
        var refreshToken = req.body.refreshToken;

        if(refreshToken in refreshTokens) {
            delete refreshTokens[refreshToken];
            return res.json({
                error: false,
                info: 'Refresh token deleted.'
            })
        }
        else
        {
            return res.json({
                error: true,
                info: 'Refresh token not found.'
            })
        }
    }
    else
    {
        return res.json({
            error: true,
            info: 'Refresh not provided.'
        })
    } 
})

// route middleware to verify a token
router.use(function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
  
    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, config.secret, function(err, decoded) {      
            if (err) 
            {
                var dateNow = new Date();
                var isExpired = false;

                if(err.expiredAt < dateNow.getTime())
                    isExpired = true;

                if(isExpired)
                {
                    console.log("XXXX*Debug***: expiredAt:" +err.expiredAt)
                    return res.json({ error: true, info: 'Token is expired.'});    
                }
                else
                {
                    console.error(err);
                    return res.json({ error: true, info: 'Failed to authenticate token.' });  
                }          
            } 
            else 
            {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;    
                next();
            }
      });

    } else {
  
      // if there is no token
      // return an error
      return res.status(403).send({ 
          error: true, 
          info: 'No token provided.' 
      });
    }
});

module.exports = router;