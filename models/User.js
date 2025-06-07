const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
   name: {
      type: DataTypes.STRING
   },
   email: {
      type: DataTypes.STRING
   },
   password: {
      type: DataTypes.STRING
   }
}, {
   tableName: 'user',
   timestamps: false
});

module.exports = User;