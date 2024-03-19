const express= require('express');
const cartrouter = express.Router();

const cartitem = require('./controller.cart');
cartrouter.post('/additem', cartitem.addToCart);
cartrouter.patch('/cartupdate/:id', cartitem.updatecart);
cartrouter.delete('/removecart/:id', cartitem.removecart);
cartrouter.get('/viweallcart', cartitem.viewallcart);

module.exports = cartrouter;