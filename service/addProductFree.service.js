const Product = require("../model/product.model")

module.exports.addProductFreeService = async (data) => {

	const result = await Product.create(data);
	return result;
}