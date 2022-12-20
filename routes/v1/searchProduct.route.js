const express = require('express');
const { searchProduct } = require('../../controller/searchProduct.controller');

const searchRoute = express.Router();




searchRoute.route('/')
.get(searchProduct)

module.exports = searchRoute;