const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
