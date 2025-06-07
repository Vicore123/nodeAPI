const express = require('express');
const app = express();
const PORT = 3000;
const sequelize = require('./database');

const Product = require('./models/Product')
const User = require('./models/User')

const createCRUDRoutes = require('./routes/crudRoutes');

app.use(express.json());

app.use('/products', createCRUDRoutes(Product));
app.use('/users', createCRUDRoutes(User));

app.listen(PORT, async () => {
   try {
      await sequelize.authenticate();
      console.log(`Server running at http://localhost:${PORT}`);      
   } catch (error) {
      console.error('Failed to connect to the database: ', error);
   }
});
console.log('Product table:', Product.getTableName());
console.log('User table:', User.getTableName());