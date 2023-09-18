const express = require('express');
const productController = require ('../controllers/product.controller');
const { checkToken } = require('../middleware/auth.middleware');


const router = express.Router();
router.post('/', checkToken, productController.createProducts)
router.get('/products',productController.fetchProducts)


module.exports = router
