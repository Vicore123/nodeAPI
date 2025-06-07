const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Product = sequelize.define('Product', {
   name: {
      type: DataTypes.STRING
   },
   description: {
      type: DataTypes.TEXT
   },
   price: {
      type: DataTypes.DECIMAL(10, 2)
   },
   stock: {
      type: DataTypes.INTEGER
   }
}, {
   tableName: 'product',
   timestamps: false
});

module.exports = Product;