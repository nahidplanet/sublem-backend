const express = require('express');
const { userOrderSubmit } = require('../../controller/userOrderInfo.controller');
const { verifyToken } = require('../../middleware/verifyToken');

const userOrderInfoRoute = express.Router()

userOrderInfoRoute.route('/')
	.get()
	.put(verifyToken ,userOrderSubmit)


module.exports = userOrderInfoRoute;