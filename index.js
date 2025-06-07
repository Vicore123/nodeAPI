const express = require('express');
const app = express();
const PORT = 3000;

const sequelize = require('./database');
const productRoutes = require('./routes/productRoutes')

app.use(express.json());

app.use('/products', productRoutes)

app.listen(PORT, async () => {
   try {
      await sequelize.authenticate();
      console.log('Connected to MySQL');
      console.log(`Server running at http://localhost:${PORT}`);      
   } catch (error) {
      console.error('Failed to connect to the database: ', error);
   }
});