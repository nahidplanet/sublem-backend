const express = require('express');
const { getAllUserByAdmin, userDeleteByAdmin, getUserById } = require('../../controller/allUser.controller');
const { verifyToken } = require('../../middleware/verifyToken');

const allUserRoute = express.Router()


allUserRoute.route("/")
	.get(getAllUserByAdmin)
	
allUserRoute.route("/dashboard/")
	.get(verifyToken,getUserById)


allUserRoute.route("/:id")
	.delete(userDeleteByAdmin)
module.exports = allUserRoute;