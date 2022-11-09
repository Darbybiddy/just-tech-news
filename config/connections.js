// import sequelize constructor from the library
const Sequelize = require("sequelize");

require('dotenv').config()

//create conncection to our database,
//pass in your MySQL info username 'root' and pasword
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});

module.exports = sequelize;


//All we're doing here is importing the base 
//Sequelize class and using it to create a new 
//connection to the database.


//The new Sequelize() function accepts the 
//database name, MySQL username, and MySQL 
//password (respectively) as parameters, then 
//we also pass configuration settings.