const Sequelize = require('sequelize');

const sequelize = new Sequelize('userdetails', 'root', 'Manish@123' ,
{dialect: 'mysql', host: 'localhost'});

module.exports =  sequelize;
