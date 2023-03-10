const express = require('express');
const { getAllOrders, getOrderById, createOrder, updateOrderStatusByAdmin, getAllOrdersByUser, deleteOrderById } = require('../../controller/order.controller');
const { verifyToken } = require('../../middleware/verifyToken');

const orderRoute = express.Router()


orderRoute.route("/")
	.get(getAllOrders)
	.post(verifyToken,createOrder)
	.put(verifyToken,updateOrderStatusByAdmin)
	// .delete(verifyToken,   deleteOrder)
orderRoute.route("/user")
	.get(verifyToken,getAllOrdersByUser)


orderRoute.route("/:id")
	.get(getOrderById)
	.delete(deleteOrderById)
	
module.exports = orderRoute;