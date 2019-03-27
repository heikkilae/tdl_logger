
const Sequelize = require('sequelize');
 
// setting up the config
const sequelize = new Sequelize('DatabaseName', 'User', 'Password', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// checking connection status
sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established successfully!");
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;