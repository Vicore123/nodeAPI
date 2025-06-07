const { Sequelize } = require('sequelize');
const USER = 'byu';
const PASSWORD = '1A3b5c791113';
const sequelize = new Sequelize('byu_hardware_store', USER, PASSWORD, {
   host: 'mysql-byu.alwaysdata.net',
   dialect: 'mysql'
});

module.exports = sequelize;