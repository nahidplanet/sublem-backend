const express = require('express');
const { adminSignIn } = require('../../controller/adminSignIn.controller');
const { verifyToken } = require('../../middleware/verifyToken');

const adminLoginRoute = express.Router()


adminLoginRoute.route("/")
	.get(verifyToken, adminSignIn)

module.exports = adminLoginRoute;
