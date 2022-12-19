const Order = require("../model/order.model")
const User = require("../model/user.model")
const { getAllOrdersService, getOrderByIdService, createOrderService, deleteOrderService, updateOrderStatusByAdminService, getAllOrdersByUserService, deleteOrderByIdService } = require("../service/order.service")

// get all order 
module.exports.getAllOrders = async (req, res, next) => {

	try {
		// step 0: copy the query ;
		let filters = { ...req.query };
		const queries = {};
		const excludeFields = ['sort', 'page', 'limit', "field", "price"]
		excludeFields.forEach(field => delete filters[field]);

		let filterString = JSON.stringify(filters);
		filterString = filterString.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
		filters = JSON.parse(filterString);

		if (req.query.sort) {
			const sortBy = req.query.sort.split(',').join(' ');
			queries.sortBy = sortBy;
		}

		if (req.query.field) {
			const fieldBy = req.query.field.split(',').join(' ');
			queries.field = fieldBy;
		}

		if (req.query.category) {
			const categoryBy = req.query.category.split(',').join(' ');
			queries.category = categoryBy;
		}

		if (req.query.page || req.query.limit) {

			//{{URL}}/product?sort=price,-name&field=name,price,-_id&category=home&page=2&limit=10
			const { page = 1, limit = 10 } = req.query;
			const skip = (page - 1) * parseInt(limit)



			queries.skip = skip;
			queries.limit = parseInt(limit);
		}

		const result = await getAllOrdersService(filters, queries)
		if (!result || result.length < 1) {
			return res.status(404).json({ status: false, message: "no order found" })
		}
		res.status(200).json({ status: true, orders: result })

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
// order status update
module.exports.updateOrderStatusByAdmin = async (req, res, next) => {
	try {
		const {id,status} =req.query;
		const result = await updateOrderStatusByAdminService(id,status)


		if (!result ) {
			return res.status(400).json({ status: false, message: "Status Updated Failed" })
		}else{

			res.status(200).json({ status: true, message:"Status Updated" })
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
// user order by id 
module.exports.getAllOrdersByUser = async (req, res, next) => {
	try {
		const userId = req?.user?.id;
		const result = await getAllOrdersByUserService(userId)


		if (!result || result.length < 1) {
			return res.status(404).json({ status: false, message: "no order found" })
		}
		res.status(200).json({ status: true, order: result })

	} catch (error) {
		next(error)
	}
}


module.exports.deleteOrderById = async (req, res, next) => {
	try {
		const id= req.params.id;
		const result = await deleteOrderByIdService(id);
		if (!result || result.length < 1) {
			return res.status(400).json({ status: false, message: "Delete failed" });
		}
		res.status(200).json({ status: true, message: "Delete Success" });
	} catch (error) {
		next(error)
	}


}