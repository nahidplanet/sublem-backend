const express = require('express');
const { verifyUser } = require('../../controller/verifyUser.controller');
const { verifyToken } = require('../../middleware/verifyToken');

const verifyUserRoute = express.Router();
verifyUserRoute.route("/").get(verifyToken, verifyUser)
module.exports = verifyUserRoute;