const express = require('express');
const { createUser } = require('../../controller/userLogin.controller');
const { checkExistUser } = require('../../middleware/checkExistUser');

const userLoginRoute = express.Router()

userLoginRoute.route("/")
.post(checkExistUser,createUser)

module.exports = userLoginRoute;