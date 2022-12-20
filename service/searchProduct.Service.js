const Product = require("../model/product.model");




module.exports.searchProductService = async (filters, queries) => {


	const result = await Product.find({ name:new RegExp(queries.search)})

	



	const totalProduct = await Product.countDocuments(filters);
	const totalPage = Math.ceil(totalProduct / 10)
	return { totalPage, totalProduct, result };
}