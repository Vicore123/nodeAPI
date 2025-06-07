const express = require('express');

function createCRUDRoutes(Model) {
   
   const router = express.Router();
   router.get('/', async (req, res) => {
      try {
         const items = await Model.findAll();
         res.json(items);
      } catch (err){
         res.status(500).json({ error: 'Failed to fetch products' });
      }
   });

   router.get('/:id', async (req, res) => {
      try {
         const item = await Model.findByPk(req.params.id);
         if (!item) return res.status(404).json({ error: 'Product not found' });
         res.json(item);
      } catch (err){
         res.status(505).json({ error: 'Failed to fetch product' });
      }
   });

   //post, put...
   return router
}

module.exports = createCRUDRoutes;