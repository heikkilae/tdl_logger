
const Sequelize = require('sequelize');
const Model = require('../db.js');

// create item table structure
const User = Model.define('Users', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      userName: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: ''
      },
      passwd: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      steamid: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: ''
      },
      dateRegistered: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      totalHoursATS: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        defaultValue: '0'
      },
      totalHoursETS2: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        defaultValue: '0'
      },
      lastLoginDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      lastJobDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      isBanned: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '0'
      },
      isAdmin: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: '0'
      },
      banReason: {
        type: Sequelize.STRING(5000),
        allowNull: false,
        defaultValue: ''
      },
      suspensionExpireDate: {
        type: Sequelize.DATE,
        allowNull: true
      },
      suspensionReason: {
        type: Sequelize.STRING(5000),
        allowNull: false,
        defaultValue: ''
      },
      status: {
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: 'Pending'
      }
}, {
    timestamps: false
});

// class methods
User.updateLastJobDate = function(id, callback) {
  User.findById(id).then(currentUser => {
      currentUser.lastJobDate = Date();
      currentUser.save().then(() => {
        return callback(true);
      }).catch(err => {
        console.log(err)
        return callback(false);
    })
}).catch(err => {
    console.log(err)
    return callback(false);
})
}

User.hasAdminPrivileges = function(id, callback) {
  User.findById(id).then(currentUser => {
      if(currentUser) {
        return callback(null, currentUser.isAdmin);
      } else {
        return callback(null, null);
      }
  }).catch(err => {
      return callback(err);
  })
};

module.exports = User;