const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;
db.on('error', function(error){
    console.log(error);
})
db.once('open',function(){
console.log('db is connect');
})