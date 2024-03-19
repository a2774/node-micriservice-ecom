const Order = require('./order.model');



module.exports.crateOrder = async(req, res)=>{
    const {customer, products, totalPrice, status} = req.body;
    try {
        const order = new Order({customer, products, totalPrice, status});
        const neworder = await order.save();
        res.status(200).json({message:"Your order add successfully", neworder});
    } catch (error) {
        console.log(error);
        res.status(500).json({messae:"Server Problem"});
    }
}


module.exports.getAllorder = async(req, res)=>{
    try {
        const order = await Order.find();
        if(!order){
            return res.status(404).json({message:"Product is not found"});
        }
        res.json({message:"View all Product", order});
    } catch (error) {
        console.log(error);
        res.json(500).json({message:"Server problem "});
    }
}

module.exports.getOneOrder = async(req, res)=>{
    try {
        const order = await Order.findById(req.params.Id);
        if(!order){
            return res.status(404).json({message:"Product is not found"});
        }
        res.status(200).json({message:"View you product", order});

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server Problem"});
    }
}


/// pending Update order