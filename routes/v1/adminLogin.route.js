const express = require('express');
const { adminLogin } = require('../../controller/adminLogin.controller');
const { verifyToken } = require('../../middleware/verifyToken');

const adminRoute = express.Router()


adminRoute.route("/")
	.get(verifyToken, adminLogin)
	.post()
	.patch()
	.delete()

module.exports = adminRoute;