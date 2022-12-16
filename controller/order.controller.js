const Order = require("../model/order.model")
const User = require("../model/user.model")
const { getAllOrdersService, getOrderByIdService, createOrderService, deleteOrderService } = require("../service/order.service")

// get all order 
module.exports.getAllOrders = async (req, res, next) => {
	try {

		const result = await getAllOrdersService()
		if (!result || result.length < 1) {
			return res.status(404).json({ status: false, message: "no order found" })
		}
		res.status(200).json({ status: true, order: result })

	} catch (error) {
		next(error)
	}
}


// get order by id 
module.exports.getOrderById = async (req, res, next) => {
	try {

		const userId = req?.user?.id;

		const result = await getOrderByIdService(userId)
		if (!result || result.length < 1) {
			return res.status(404).json({ status: false, message: "no order found" })
		}
		res.status(200).json({ status: true, order: result })
	} catch (error) {
		next(error)
	}

}
// create order by id 
module.exports.createOrder = async (req, res, next) => {

	try {
		// const data = req.body;
		const userId = req?.user?.id;
		const cartProduct = await User.findOne({ _id: userId });
		if (!cartProduct || cartProduct.length < 1) {
			return res.status(400).json({ status: false, message: "Request failed !" });
		} else {
			// const userId = cartProduct._id;
			const orderItems = cartProduct.cartItems;

			const order = await Order.create({ userId, orderItems });
			if (!order || order.length < 1) {
				return res.status(400).json({ status: false, message: "Request failed !" });

			} else {
				const deleteCart = await User.updateOne({ _id: userId }, { $set: { cartItems: [] } });
				if (!deleteCart || deleteCart.length < 1) {
					return res.status(400).json({ status: false, message: "Request failed !" });

				} else {
					res.status(200).json({ status: true, message: "Your Order has been confirmed" });

				}
			}

		}

	} catch (error) {
		next(error)
	}
}
// delete order by id 
module.exports.deleteOrder = async (req, res, next) => {


	try {
		const data = req.body;
		const userId = req?.user?.id;
		const result = await deleteOrderService(userId)


		if (!result || result.length < 1) {
			return res.status(404).json({ status: false, message: "no order found" })
		}
		res.status(200).json({ status: true, order: result })

	} catch (error) {
		next(error)
	}
}