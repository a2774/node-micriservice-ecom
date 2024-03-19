const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId, // Correct usage of mongoose.Schema.Types.ObjectId
        ref: 'Product', // Assuming 'Product' is the name of the related model
    },
    quantity: {
        type: Number,
        default: 1,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Correct usage of mongoose.Schema.Types.ObjectId
        ref: 'User', // Assuming 'User' is the name of the related model
    }
});

const Cart = mongoose.model('Cart', cartSchema); // Corrected the schema variable name
module.exports = Cart;
