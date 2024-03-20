const express = require('express');
require('dotenv').config();

const port = process.env.PORT;
const app = express();

const Productrouter = require('./src/features/product/product.router');
const Userrouter = require('./src/features/user/user.router');
const Cartrouter = require('./src/features/cart/router.cart');
const Orderrouter = require('./src/features/order/order.router');
const db = require('./src/middileware/db.connection');
app.use(express.json());
app.use('/api/product',Productrouter);
app.use('/api/user', Userrouter);
app.use('/api/cart', Cartrouter); 
app.use('/api/order', Orderrouter);
 

app.listen(port, function(err){
    if(err){
        console.log('server is error on port', port);
    }else{
        console.log('server is running on port', port);
    }
})