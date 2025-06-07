const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET all products
router.get('/', async (req, res) => {
   try {
      const products = await Product.findAll();
      res.json(products);
   } catch (err){
      res.status(500).json({ error: 'Failed to fetch products' });
   }
});

// GET one product by ID
router.get('/:id', async (req, res) => {
   try {
      const product = await Product.findByPk(req.params.id);
      if (!product) return res.status(404).json({ error: 'Product not found' });
      res.json(product);
   } catch (err){
      res.status(505).json({ error: 'Failed to fetch product' });
   }
});

module.exports = router;