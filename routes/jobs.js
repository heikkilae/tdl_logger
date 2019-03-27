// get User model
var Job = require('../models/job');
var User = require('../models/user');

// require authetication
var apiRoutes = require('../routes/auth');


// route to post job (GET http://localhost:8080/api/logger)
// require job object called jobData
apiRoutes.post('/logger', function(req, res)
{
    if(!req.body.jobData)
    {
        res.json({error: true, info: 'No job data!'});
        return;
    }
        
    if(!req.body.state)
    {
        res.json({error: true, info: 'No state found!'});
        return;
    }
        

    // get job in progress
    Job.getJobInProgress(req.decoded.steamid, true, jobInProgress => {        
        // get oldJob (loadLastJobData)
        Job.loadLastJobData(req.decoded.steamid, null, oldJob => {

            // parse the jobData to Job object
            var job = Job.build(JSON.parse(req.body.jobData));
          
            // switch state
            switch(parseInt(req.body.state)) {
                case 2:// job has been started
                    job.JobStart(true, oldJob, jobInProgress, req, res);
                    break;
                case 3:// job info is being updated
                    job.JobUpdate(jobInProgress, oldJob, req, res);
                    break;
                case 4:// job has been finished
                    job.JobFinish(jobInProgress, req, res);
                    break;
                case 8:// job has been cancelled
                    job.obCancel(req, res);
                    break;
                default:
                    res.json({error: true, info: 'Incorrect state!'})
                    break;
            } 
        })
    });
})

// route to return user jobs (GET http://localhost:8080/api/job)
apiRoutes.get('/jobs', function(req, res)
{
    Job.findAll({
        where: { steamid: req.decoded.steamid }
    }).then(jobs => {
        if(jobs) {
            res.json({error: false, jobs});
        } else {
            res.json({error: true, info: 'Jobs not found!'})
        }
    }).catch( err => {
        console.log(error)
        res.json({error: true, info: 'Uknown error!'})
    })
});

// route to return all jobs (GET http://localhost:8080/api/jobs)
apiRoutes.get('/allJobs', function(req, res) 
{
    User.hasAdminPrivileges(req.decoded.id, function(error, isAdmin){ 
        if(error) {
            console.log(error);
            res.json({error: true, info: 'Error!' });
        } else if(isAdmin) {
            Job.findAll({}).then(jobs =>  {
                res.json({error: false, jobs});
            }).catch( err => {
                console.log(err);
                res.json({error: true, info: 'Error!' });
            })
        } else {
            res.json({error: true, info: 'No privileges!'})
        }
    });
});

module.exports = apiRoutes;