const Cart = require("./model.cart");
const Product = require("../product/product.module");

module.exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const product = await Product.findOne({ _id: productId });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const newCartItem = new Cart({ productId, quantity });

    const savedCartItem = await newCartItem.save();

    res.status(200).json({
      message: "Item added successfully to cart",
      cartItem: savedCartItem,
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports.updatecart = async (req, res) => {
  try {
    const cartItem = await Cart.findOne( req.params.Id );

    if (!cartItem) {
      return res.status(404).json({ message: "No item found in the cart" });
    }
    cartItem.quantity = req.body.quantity;  
    const updatedCartItem = await cartItem.save();
    res
      .status(200)
      .json({
        message: "Cart updated successfully",
        cartItem: updatedCartItem,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


module.exports.removecart = async (req, res) => {
    try {
        const cartItem = await Cart.findByIdAndDelete(req.params.Id);
        if (!cartItem) {
            return res.status(404).json({ message: "No item found in the cart" });
        }
        res.json({ message: "Successfully deleted item from cart", cartItem });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server problem" });
    }
}

module.exports.viewallcart = async(req, res)=>{
    try {
        const cart = await Cart.find();
        if(!cart){
            return res.status(404).json({message:"No cart item here"});
        }
        res.json({message:"viwe all cart item", cart})
    } catch (error) {
        
    }
}