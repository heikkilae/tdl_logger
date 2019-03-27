var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var backbone    = require('backbone');

// configuration
var port = process.env.PORT || 8080;

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// basic route
app.get('/', function(req, res) {
    res.send('Hello!');
});

// API routes
var users = require('./routes/users')
app.use('/api', users);
var jobs = require('./routes/jobs')
app.use('/api', jobs);

// start the server 
app.listen(port);
console.log('Magic happens at http://localhost:' + port);
