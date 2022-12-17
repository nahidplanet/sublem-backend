const express = require('express');
const { getAllOrders, getOrderById, createOrder, deleteOrder } = require('../../controller/order.controller');
const { verifyToken } = require('../../middleware/verifyToken');

const orderRoute = express.Router()


orderRoute.route("/")
	.get(getAllOrders)
	.post(verifyToken,createOrder)
	.delete(verifyToken,   deleteOrder)


orderRoute.route("/:id")
	.get(getOrderById)
module.exports = orderRoute;