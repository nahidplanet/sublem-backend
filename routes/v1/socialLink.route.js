const express = require('express');
const { homeCategoryPic, getLinks } = require('../../controller/socialLink.controller');

const socialLinkRoute = express.Router()
socialLinkRoute.route('/')
.get(getLinks)
.put(homeCategoryPic)

module.exports = socialLinkRoute