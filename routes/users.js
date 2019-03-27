// get User model
var User = require('../models/user');

// require authetication
var apiRoutes = require('../routes/auth');

// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', function(req, res) 
{
  res.json({ error: false, info: 'Welcome to the coolest API on earth!' });
});

// route to return user (GET http://localhost:8080/api/user)
apiRoutes.get('/user', function(req, res) 
{
    User.findOne({
        attributes: 
            ['id', 'userName', 'dateRegistered', 
            'lastLoginDate', 'dateRegistered', 'totalHoursATS', 
            'totalHoursETS2','lastLoginDate','lastJobDate',
            'isBanned','isAdmin','banReason','suspensionExpireDate',
            'suspensionReason' ,'status'],
        where: { id: req.decoded.id }
    }).then(users =>  {
        res.json({error: false, users});
    })
    .catch( err => {
        console.log(err);
        res.json({error: true, info: 'Failed to get user.' });
    })    
});

// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.get('/allUsers', function(req, res) 
{
    User.hasAdminPrivileges(req.decoded.id, function(error, isAdmin){   
        if(error) {
            console.log(error);
            res.json({error: true, message: "Failed to get all users."});
        } else if(isAdmin) {
            User.findAll({
                attributes: 
                    ['id', 'userName', 'dateRegistered', 
                    'lastLoginDate', 'dateRegistered', 'totalHoursATS', 
                    'totalHoursETS2','lastLoginDate','lastJobDate',
                    'isBanned','isAdmin','banReason','suspensionExpireDate',
                    'suspensionReason' ,'status']
            }).then(users =>  {
                res.json({error: false, users});
            })
            .catch( err => {
                console.log(err);
                res.json({error: true, message: 'Failed to get all users.' });
            })
        }
        else
        {
            res.json({error: true, info: 'No privileges'})
        }
    });
});

// route to change password (POST http://localhost:8080/api/changePassword)
// requires: password, token
apiRoutes.post('/changePassword', function(req, res)
{
    var bcrypt = require('bcrypt');
    const saltRounds = 10;

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {

        if(!err)
        {
            User.update(
                {passwd: hash},
                {where: {id: req.decoded.id} 
            })
            .then(result =>{
                res.json({ error: false, info: 'Password updated.' });
            })
            .catch(err => {
                console.log(err);
                res.json({ error: true, info: 'Failed to update password'});
            })
        }
        else
        {
            console.log(err);
            res.json({ error: true, info: 'Failed to update password'});
        }
        
    });
});

module.exports = apiRoutes;