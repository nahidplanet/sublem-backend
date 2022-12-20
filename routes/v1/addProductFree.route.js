const express = require('express');
const { addProductFree, updateFreeProduct } = require('../../controller/addProductFree.controller');


const addProductFreeRoute = express.Router()



addProductFreeRoute.route('/')
	.post(addProductFree)
	.put(updateFreeProduct)

module.exports = addProductFreeRoute;