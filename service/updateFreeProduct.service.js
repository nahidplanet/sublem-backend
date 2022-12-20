const Product = require("../model/product.model")

module.exports.updateFreeProductService = async (id,data)=>{
	const result = await Product.updateOne({_id:id},data)
	return result;
}