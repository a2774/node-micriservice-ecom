const Product = require("../product/product.module");

module.exports.addProduct = async (req, res) => {
  const { productName, category, price, description } = req.body;
  try {
    const newProduct = new Product({
      productName,
      category,
      price,
      description,
    });
    const savedProduct = await newProduct.save();
    res.json({
      message: "Product added successfully",
      newProduct: savedProduct,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports.getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    return res.json({ message: "View all products", products });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports.rateProduct = async (req, res) => {};

module.exports.getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res.json({ message: "Your Product", product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.update = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "product is not find" });
    }
    product.set(req.body);
    res.json({ messagr: "Update the product", product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "inter server problem" });
  }
};
module.exports.filter = async (req, res) => {
    try {
        let query = {};
    
        // Check if productName parameter is provided
        if (req.query.productName) {
          query.productName = { $regex: new RegExp(req.query.productName, 'i') };
        }
    
        // Check if category parameter is provided
        if (req.query.category) {
          query.category = req.query.category;
        }
    
        // Check if minPrice parameter is provided
        if (req.query.minPrice) {
          query.price = { $gte: req.query.minPrice };
        }
    
        // Check if maxPrice parameter is provided
        if (req.query.maxPrice) {
          query.price = { ...query.price, $lte: req.query.maxPrice };
        }
    
        const products = await Product.find(query);
    
        res.json(products);
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }
  };
  