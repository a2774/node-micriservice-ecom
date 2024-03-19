const express = require('express');
const productController = require('../product/product.controller');
const productrouter = express.Router();
productrouter.post('/addproduct', productController.addProduct);
productrouter.get('/getallproduct', productController.getAllProduct);
productrouter.get('/getbyid/:id', productController.getOneProduct);
productrouter.get('/update/:id', productController.update);
productrouter.post('/filter', productController.filter)
module.exports = productrouter;