const Order = require("../model/order.model");



module.exports.getAllOrdersService = async (filters, queries) => {
	// const cart = await User.findOne({_id:userId}).populate("cartItems.productId");
	// return cart
	// console.log("filters",filters);
	const orders = await Order.find(filters).populate("userId").populate({ path: "orderItems.productId", model: "Product" })
		.skip(queries.skip)
		.limit(queries.limit)

	const totalProduct = await Order.countDocuments(filters);
	const totalPage = Math.ceil(totalProduct / queries.limit)
	return { totalPage, totalProduct, orders };

}

// get order by id 
module.exports.getOrderByIdService = async (userId) => {
	const result = await Order.findOne({ id: userId })
	return result;
}
// create order by id 
module.exports.createOrderService = async (data) => {

	const result = await Order.create(data)
	return result;
}
// update order Status by id 
module.exports.updateOrderStatusByAdminService = async (id, status) => {
	const result = Order.updateOne({ _id: id }, { orderStatus: status });
	return result;
}











// delete order by id 
module.exports.deleteOrderService = async (id) => {

	const result = await Order.remove({ userId: id })
	return result;
}