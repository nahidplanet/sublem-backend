const express = require('express');
const { postAndUpdateOne } = require('../../controller/logo.controller');

const categoryAndLogoRoute = express.Router()
categoryAndLogoRoute.route('/')
.get()
.put(postAndUpdateOne)

module.exports = categoryAndLogoRoute