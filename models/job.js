
const Sequelize = require('sequelize');
const Model = require('../db.js');
const vtcConfig = require('../vtc_config.js'); // get our config file
var User = require('./user.js');

// create item table structure
const Job = Model.define('Jobs', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      steamid: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      userName: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      sourceCompany: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      sourceCity: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      destinationCompany: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      destinationCity: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      startOdometer: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0.00'
      },
      truckOdometer: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0.00'
      },
      endOdometer: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: '0.00'
      },
      distanceDriven: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: '0.00'
      },
      litresBurned: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: '0.00'
      },
      litresPurchased: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0.00'
      },
      trailerName: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      trailerMass: {
        type: Sequelize.FLOAT,
        allowNull: true,
        defaultValue: '0.00'
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      lastUpdateDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      litresRemaining: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0.00'
      },
      submitDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      income: {
        type: Sequelize.INTEGER(7),
        allowNull: true,
        defaultValue: '0'
      },
      wasSpeeding: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '0'
      },
      topSpeed: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0.000000'
      },
      fuelCost: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0.00'
      },
      fuelFactor: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0.00'
      },
      ferryCost: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        defaultValue: '0'
      },
      trainCost: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        defaultValue: '0'
      },
      trailerDamageCost: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0.00'
      },
      engineDamage: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0.00'
      },
      transmissionDamage: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0.00'
      },
      chassisDamage: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0.00'
      },
      cabinDamage: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0.00'
      },
      wheelDamage: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0.00'
      },
      trailerDamage: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0.00'
      },
      travelExpenses: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: '0.00'
      },
      ferriesTaken: {
        type: Sequelize.STRING(5000),
        allowNull: false,
        defaultValue: '[]'
      },
      trainsTaken: {
        type: Sequelize.STRING(5000),
        allowNull: false,
        defaultValue: '[]'
      },
      wasLate: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '0'
      },
      game: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      fuelType: {
        type: Sequelize.STRING(50),
        allowNull: false,
        defaultValue: 'Litres'
      },
      distanceType: {
        type: Sequelize.STRING(50),
        allowNull: false,
        defaultValue: 'KM'
      },
      weightType: {
        type: Sequelize.STRING(50),
        allowNull: false,
        defaultValue: 'Tonnes'
      },
      currency: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: 'EUR'
      },
      truckModel: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: ''
      },
      truckMake: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: ''
      },
      status: {
        type: Sequelize.STRING(24),
        allowNull: false,
        defaultValue: 'Unknown'
      },
      approved: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '0'
      },
      comments: {
        type: Sequelize.STRING(5000),
        allowNull: false,
        defaultValue: ''
      },
      loggerVersion: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '1.0.0.15'
      },
      vtcCode: {
        type: Sequelize.STRING(3),
        allowNull: false,
        defaultValue: 'SBL'
      },
      vtcName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        defaultValue: 'SB Logistics'
      },
      startX: {
        type: Sequelize.STRING(15),
        allowNull: false,
        defaultValue: '0'
      },
      startY: {
        type: Sequelize.STRING(15),
        allowNull: false,
        defaultValue: '0'
      },
      startZ: {
        type: Sequelize.STRING(15),
        allowNull: false,
        defaultValue: '0'
      },
      endX: {
        type: Sequelize.STRING(15),
        allowNull: false,
        defaultValue: '0'
      },
      endY: {
        type: Sequelize.STRING(15),
        allowNull: false,
        defaultValue: '0'
      },
      endZ: {
        type: Sequelize.STRING(15),
        allowNull: false,
        defaultValue: '0'
      },
      avgConsumption: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      coordinateX: {
        type: Sequelize.STRING(15),
        allowNull: false,
        defaultValue: '0'
      },
      coordinateY: {
        type: Sequelize.STRING(15),
        allowNull: false,
        defaultValue: '0'
      },
      coordinateZ: {
        type: Sequelize.STRING(15),
        allowNull: false,
        defaultValue: '0'
      },
      isMoving: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '0'
      }
}, {
    timestamps: false
});

// instance methods
Job.prototype.JobStart = function(reportSuccess, oldJob, jobInProgress, req, res, callback) {
  if(this.compare(oldJob, null, result => { return result }))
  {
    if(reportSuccess)
      res.json({error: true, responseCode: 27, info:'Job has already been submitted'});
    else
      return callback(false);
  }
  else if (this.compare(jobInProgress, null, result => { return result }))
  {
    if(reportSuccess)// return the job code to the logger
      res.json({error: true, responseCode: 26, info: jobInProgress});
    else
      return callback(true);
  }
  else if
  ( // check to see if the jobs start and finish in the same city
    this.sourceCity == this.destinationCity && 
    this.navigationDistanceLeft < vtcConfig.minimumDistance
  )
  {
    if(reportSuccess)
      res.json({error: true, responseCode: 23, info: 'Job source and destination cities are the same or job is less than 10,000 meters.'});
    else
    return callback(false); // return false to indicate failure
  }
  else if (this.validateJob(validated => { return validated}))
  {
    if(reportSuccess)
      res.json({error: true, responseCode: 24, info: 'Job is invalid.'});
    else
      return callback(false);
  }
  else // no more job checks. job is good, so insert it into the table.
  {
    this.setUnits(result => {
      if(result == true) {
        Job.create({
          steamid: this.steamid,
          userName: this.userName,
          sourceCity: this.sourceCity,
          sourceCompany: this.sourceCompany,
          destinationCity: this. destinationCity,
          destinationCompany: this. destinationCompany,
          startOdometer: this.startOdometer,
          truckOdometer: this.truckOdometer,
          litresBurned: this.litresBurned,
          litresRemaining: this. litresRemaining,
          trailerName: this.trailerName,
          trailerMass: this.trailerMass,
          startDate: this.startDate,
          income: this.income,
          fuelFactor: this.fuelFactor,
          trailerDamageCost: this.trailerDamageCost,
          engineDamage: this.engineDamage,
          transmissionDamage: this.transmissionDamage,
          chassisDamage: this.chassisDamage,
          cabinDamage: this.cabinDamage,
          wheelDamage: this.wheelDamage,
          trailerDamage: this.trailerDamage,
          wasLate: this.wasLate,
          game: this.game,
          fuelType: this.fuelType,
          distanceType: this.distanceType,
          weightType: this.weightType,
          currency: this.currency,
          truckModel: this.truckModel,
          truckMake: this.truckMake,
          status: 'Started',
          loggerVersion: this.loggerVersion,
          vtcCode: this.vtcCode,
          vtcName: this.vtcName,
          startX: this.startX,
          startY: this.startY,
          startZ: this.startZ,
          avgConsumption: 0,
          isMoving: 0
        }).then(newJobInProgress => {
          if(reportSuccess) {             
              res.json({error: false, responseCode: 20, info: newJobInProgress});
          } else {
            return callback(true);  // return true to indicate success
          }            
        }).catch(error => {
          if(reportSuccess)
          {
            console.log(error);
            res.json({error: true, responseCode: 25,info: 'Error inserting new job.'});
          }       
          else
          {
            return callback(false); // return false to indicate failure
          }           
        })        
      }
    })
  }
};

Job.prototype.JobUpdate = function(jobInProgress, oldJob, req, res) {
  // check to make sure it is a job and that the query didn't fail
  if(jobInProgress === false)
  {
    this.JobStart(false, oldJob, jobInProgress, req, res, newJobCreated => {
      // call the job start function to create the job and set argument to false so it doesn't exit the script.
      if( !newJobCreated )
      {
        res.json({error: true, responseCode: 31, info: 'Failed to get job in progress. Also failed to create new job.'})
      }   
      else
      {
        res.json({error: true, responseCode: 32, info: 'Error retrieving job in progress for user. But created new job...'})
      }
    });
  }
  else
  {
    // make sure job in progress is the same as the job we loaded.
    if(this.compare(jobInProgress, null, result => { return result }))
    {
      // checks if moving
      if(
        jobInProgress.coordinateX != this.coordinateX || 
        jobInProgress.coordinateY != this.coordinateY || 
        jobInProgress.coordinateZ != this.coordinateZ
      )
      {
        this.isMoving = 1;
      }
      // calculate average consumption
      this.avgConsumption = (this.litresBurned / this.distanceDriven * 100);

      jobInProgress.update({
        truckOdometer: this.truckOdometer,
        distanceDriven: this.distanceDriven,
        litresBurned: this.litresBurned,
        litresPurchased: this.litresPurchased,
        litresRemaining: this.litresRemaining,
        lastUpdateDate: Date(),
        wasSpeeding: this.wasSpeeding,
        topSpeed: this.topSpeed,
        fuelCost: this.fuelCost,
        ferryCost: this.ferryCost,
        trainCost: this.trainCost,
        engineDamage: this.engineDamage,
        transmissionDamage: this.transmissionDamage,
        chassisDamage: this.chassisDamage,
        cabinDamage: this.cabinDamage,
        wheelDamage: this.wheelDamage,
        trailerDamageCost: this.trailerDamageCost,
        trailerDamage: this.trailerDamage,
        travelExpenses: this.travelExpenses,
        ferriesTaken: this.ferriesTaken,
        trainsTaken: this.trainsTaken,
        wasLate: this.wasLate,
        avgConsumption: this.avgConsumption,
        status: 'In Progress',
        coordinateX: this.coordinateX,
        coordinateY: this.coordinateY,
        coordinateZ: this.coordinateZ,
        isMoving: this.isMoving
      }).then(job => {
        
        res.json({error: false, responseCode: 30, info: 'Updated job in progress successfully.'});
      }).catch(error => {
        console.log(error);
        res.json({error: true, responseCode: 33, info: 'Error updating job in progress."'});
      });
    }
    else
    {
      res.json({error: true, responseCode: 34, info: 'Job in progress does not match current job being reported. Update failed.'});
    }
  }
};

Job.prototype.JobFinish = function(jobInProgress, req, res) {
  
  if( jobInProgress === false)
  {
    res.json({error: true, responseCode: 41, info: 'Could not find job in progress.'});
  }    
  else
  {
    this.compare(jobInProgress, null, compareResult => {
      // check if job being reported matches the one in the database aleady
      if(compareResult)
      {
        var approved = 1;
        var comments = "Using TruckersData Logger v" + this.loggerVersion;

        if(vtcConfig.autoAcceptJobs)
        {
          // distance & damage
          if(this.distanceDriven > vtcConfig.maxDistance) {
            approved = 0;
            comments += ' Distance driven was above the normally allowed distance.';
          }
          if(this.trailerDamage > vtcConfig.maxTrailerDamage) {
            approved = 0;
            comments += " Your trailer has been greatly damaged and will need a supervisor's approval.";
          }

          // ETS2
          if(this.game == "Euro Truck Simulator 2") 
          {
            if(this.income > vtcConfig.maxIncomeETS2)
            {
              approved = 0;
              comments = " Job income was above the maximum allowed income.";
            }
            if(this.travelExpenses > vtcConfig.maxExpensesETS2)
            {
                approved = 0;
                comments += " Travel expenses exceeded the budgetted amount.";
            }
          }
          // ...or ATS
          else
          {
            if(this.income > vtcConfig.maxIncomeATS)
            {
              approved = 0;
              comments = " Job income was above the maximum allowed income.";
            }
            if(this.travelExpenses > vtcConfig.maxExpensesATS)
            {
                approved = 0;
                comments += " Travel expenses exceeded the budgetted amount.";
            }
          }

          // late
          if(this.wasLate && !vtcConfig.allowLateDeliveries)
          {
            approved = 0;
            comments += " You were late on delivery. Your supervisor will need to review the delivery.";
          }
          // speeding
          if(this.wasSpeeding && !vtcConfig.allowSpeeding)
          {
            approved = 0;
            comments += " You have been caught speeding. Your supervisor will need to review the delivery.";
          }
          // approved
          if(approved)
          {
            comments += " Job has met all standards.";
          }
          else
          {
              comments += " Your job failed to meet some requirements set forward by your supervisor(s) and has been sent for review.";
          }
        }
      
        // auto accept = off
        else
        {
          comments += " Auto accept disabled, a supervisor will need to review your delivery.";
        }

        // end job
        jobInProgress.update({
          truckOdometer: this.truckOdometer,
          distanceDriven: this.distanceDriven,
          litresBurned: this.litresBurned,
          litresPurchased: this.litresPurchased,
          litresRemaining: this.litresRemaining,
          submitDate: Date(),
          wasSpeeding: this.wasSpeeding,
          topSpeed: this.topSpeed,
          fuelCost: this.fuelCost,
          ferryCost: this.ferryCost,
          trainCost: this.trainCost,
          engineDamage: this.engineDamage,
          transmissionDamage: this.transmissionDamage,
          chassisDamage: this.chassisDamage,
          cabinDamage: this.cabinDamage,
          wheelDamage: this.wheelDamage,
          trailerDamageCost: this.trailerDamageCost,
          trailerDamage: this.trailerDamage,
          travelExpenses: this.travelExpenses,
          ferriesTaken: this.ferriesTaken,
          trainsTaken: this.trainsTaken,
          wasLate: this.wasLate,
          avgConsumption: (this.litresBurned/this.distanceDriven*100),
          status: 'Finished',
          endX: this.coordinateX,
          endY: this.coordinateY,
          endZ: this.coordinateZ,
          isMoving: 0,
          approved: approved,
          comments: comments,
          coordinateX: this.coordinateX,
          coordinateY: this.coordinateY,
          coordinateZ: this.coordinateZ
        }).then(job => {
          User.updateLastJobDate(req.decoded.id, result => {
            if(result == false)
              console.log('Error: cannot update last job date.');
            res.json({error: false, responseCode: 40, info: 'Successfully set job status to finished! Well done!'});
          })
        }).catch(error => {
          console.log(error);
          res.json({error: true, responseCode: 42, info: 'Failed to set job status to finished.'})
        });
      }

      // jobs don't match, return error to logger.
      else
      {
        res.json({error: true, responseCode: 43, info: 'Job reported does not match job being reported.'});
      }
    });
  }
};

Job.prototype.obCancel = function(req, res) 
{
  // get job in progress, but disallow Started status
  Job.getJobInProgress(req.decoded.steamid, false, jobInProgress => {

    if( jobInProgress === false)
    {
      res.json({error: true, responseCode: 81, info: 'Could not find job in progress.'});
    }
    else
    {
      // check if job being reported matches the one in the database aleady
      if( this.compare(jobInProgress, null, result => {return result}) )
      {
          // end job
        jobInProgress.update({
          distanceDriven: this.distanceDriven,
          litresBurned: this.litresBurned,
          litresPurchased: this.litresPurchased,
          litresRemaining: this.litresRemaining,
          submitDate: Date(),
          wasSpeeding: this.wasSpeeding,
          topSpeed: this.topSpeed,
          fuelCost: this.fuelCost,
          ferryCost: this.ferryCost,
          trainCost: this.trainCost,
          engineDamage: this.engineDamage,
          transmissionDamage: this.transmissionDamage,
          chassisDamage: this.chassisDamage,
          cabinDamage: this.cabinDamage,
          wheelDamage: this.wheelDamage,
          trailerDamageCost: this.trailerDamageCost,
          trailerDamage: this.trailerDamage,
          travelExpenses: this.travelExpenses,
          ferriesTaken: this.ferriesTaken,
          trainsTaken: this.trainsTaken,
          wasLate: this.wasLate,
          avgConsumption: (this.litresBurned/this.distanceDriven*100),
          isMoving: 0,
          status: 'Cancelled',
          endX: this.coordinateX,
          endY: this.coordinateY,
          endZ: this.coordinateZ,
          approved: 0,
          comments: 'Using TDL v '+ this.loggerVersion,
          coordinateX: this.coordinateX,
          coordinateY: this.coordinateY,
          coordinateZ: this.coordinateZ
        }).then(job => {
          User.updateLastJobDate(req.decoded.id, result => {
            if(result == true)
              console.log("Failed to update Last Job Date.")
            res.json({error: false, responseCode: 80, info: 'Successfully set job status to cancelled.'});    
          });   
        }).catch(error => {
          console.log(error);
          res.json({error: true, responseCode: 82, info: 'Failed to set job status to cancelled.'});
        });
      }
      else
      {
        // jobs don't match, return error to logger.
        res.json({error: true, responseCode: 83, info: 'Job reported does not match job being reported.'});
      }
    }
  });
}

Job.prototype.compare = function(job, resumeCheck=false, callback) {
  if(resumeCheck == null)
    resumeCheck = false;

  if(job instanceof Job) 
  {
    if(!resumeCheck) { 
      if( 
        this.sourceCity == job.sourceCity && 
        this.destinationCity == job.destinationCity &&
        this.sourceCompany == job.sourceCompany &&
        this.destinationCompany == job.destinationCompany &&
        this.trailerName == job.trailerName &&
        this.trailerMass == job.trailerMass &&
        this.income == job.income &&
        this.truckMake == job.truckMake &&
        this.truckModel == job.truckModel
      )
      {
        return callback(true);
      }
      else
      {
        return callback(false);
      }
    }
    else
    {
      if( 
        this.sourceCity == job.sourceCity && 
        this.destinationCity == job.destinationCity &&
        this.sourceCompany == job.sourceCompany &&
        this.destinationCompany == job.destinationCompany &&
        this.trailerName == job.trailerName &&
        this.trailerMass == job.trailerMass &&
        this.income == job.income &&
        this.truckMake == job.truckMake &&
        this.truckModel == job.truckModel &&
        Math.abs(this.truckOdometer == job.truckOdometer) <= 5000 &&
        Math.abs(this.navigationDistanceLeft == job.navigationDistanceLeft) <= 5000 &&
        Math.abs(this.litresRemaining == job.litresRemaining) <= 5
      )
      {
        return callback(true);
      }
      else
      {
        return callback(false);
      }
    }
  }

};

Job.prototype.validateJob = function(callback) {
  if(
    this.sourceCity != "" &&
    this.destinationCity != "" &&
    this.sourceCompany != "" &&
    this.destinationCompany != "" &&
    this.trailerName != "" &&
    this.game != "" && this.game != "Unknown" &&
    this.income != 0 &&
    this.truckModel != "Unknown" &&
    this.truckMake != "Unknown" &&
    this.vtcCode != "" &&
    this.vtcName != "" &&
    this.loggerVersion != "Unknown"
  )
  {
    callback(true);
  }
  else
  {
    callback(false);
  }
};

Job.prototype.setUnits = function(callback) {
  try {
    this.fuelType = this.game=="Euro Truck Simulator 2" ? "Litres" : "Litres";
    this.weightType = this.game=="Euro Truck Simulator 2" ? "KGs" : "KGs";
    this.currency = this.game=="Euro Truck Simulator 2" ? "Euros" : "US Dollars";
    this.distanceType = this.game=="Euro Truck Simulator 2" ? "KM" : "KM";
    this.fuelFactor = this.game=="Euro Truck Simulator 2" ? 1.16 : 0.75;
    return callback(true);
  } 
  catch (err) {
    console.log(err);
    return callback(false);
  } 
};
    
// class methods
Job.getConfs = function(config, callback)
{
  console.log("***Job.getConfs", config);
  return callback(config);
}

Job.getJobInProgress = function(steamid, allowStarted, callback) {
  if(allowStarted)
  {
    Job.findAndCount({
      limit: 1,
      where: { 
        steamid: steamid, 
        [Sequelize.Op.or]: [{status: 'In Progress'}, {status: 'Started'}]
      }
    }).then(job => {
      if(job.count === 1) {
        return callback(job.rows[0]);
      } else {
        return callback(false);
      }
    }).catch(err => {
      return callback(err);
    })
  }
  else
  {
    Job.findAndCount({
      limit: 1,
      where: { 
        steamid: steamid, 
        status: 'In Progress'
      }
    }).then(job => {
      if(job.count === 1) {
        return callback(job.rows[0]);
      } else {
        return callback(false);
      }
    }).catch(err => {
      return callback(err);
    })
  }
}

Job.loadLastJobData = function(steamid, InProgressOnly=false, callback) {
  if(InProgressOnly == null)
    InProgressOnly = false;

  if(InProgressOnly)
  {
    Job.findAndCount({
      limit: 1,
      where: { steamid: steamid, status: 'In Progress'},
      order: [['lastUpdateDate', 'DESC']] 
    }).then(job => {
      if(job.count === 1) {
        return callback(job.rows[0]);
      } else {
        return callback(false);
      }
    }).catch(err => {
      console.log(err);
      return callback(false);
    })
  }
  else
  {
    Job.lastJobFinished(steamid, lastJobFinished => {
      Job.lastJobCancelled(steamid, lastJobCancelled => {
        if(lastJobCancelled === false && lastJobFinished === false) 
        {
          return callback(false);
        }
        else if(lastJobCancelled !== false && lastJobFinished !== false)
        {
          // compare dates for most recent
          var cancelled = lastJobCancelled.submitDate;
          var finished = lastJobFinished.submitDate;

          if(cancelled > finished)
            return callback(lastJobCancelled);
          else
            return callback(lastJobFinished);
        }
        else
        {
          if(lastJobCancelled !== false)
          {
            return callback(lastJobCancelled);
          }
          else if(lastJobFinished !== false);
          {
            return callback(lastJobFinished);
          }
        }
      });
    });
  }
}

Job.lastJobFinished = function(steamid, callback) {
  var lastJobFinished = null;
  Job.findOne({
    limit: 1,
    where: { steamid: steamid, status: 'Finished'},
    order: [['lastUpdateDate', 'DESC']] 
  }).then(job => {
    if(job != null)
      return callback(job);
    else return callback(false);
  }).catch(err => {
    console.log(err);
    return callback(false);
  })
}

Job.lastJobCancelled = function(steamid, callback) {
  Job.findOne({
    limit: 1,
    where: { steamid: steamid, status: 'Cancelled'},
    order: [['lastUpdateDate', 'DESC']] 
  }).then(job => {
    if(job != null)
      return callback(job);
    else return callback(false);
  }).catch(err => {
    console.log(err);
    return callback(false);
  })
}

module.exports = Job;