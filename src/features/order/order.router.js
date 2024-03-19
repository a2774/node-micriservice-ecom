const express = require('express');
const orderrouter = express.Router();
const orderController = require('./order.controller');

orderrouter.post('/addorder', orderController.crateOrder);
orderrouter.get('/getallOder', orderController.getAllorder);
orderrouter.get('/getbyid/:id', orderController.getOneOrder);


module.exports = orderrouter;