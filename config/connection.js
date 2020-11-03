const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
//variable names DB_NAME, DB_USER, DB_PW all come from .env file 
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;