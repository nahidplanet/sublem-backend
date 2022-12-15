const express = require('express');
const { getAllOrders, getOrderById, createOrder, deleteOrder } = require('../../controller/order.controller');
// const { checkEmailVerify } = require('../../middleware/checkEmailVerify');
const { verifyToken } = require('../../middleware/verifyToken');

const orderRoute = express.Router()


orderRoute.route("/")
	.get(verifyToken,   getAllOrders)
	.post(verifyToken,   createOrder)
	.delete(verifyToken,   deleteOrder)


orderRoute.route("/:id")
	.get(getOrderById)
	// 
	// .patch(updateOrderById)
	// .delete(deleteOrderById)
module.exports = orderRoute;