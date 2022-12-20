const express = require('express');
const { deleteSlider, AddSlider, getSlider } = require('../../controller/slider.controller');


const sliderRoute = express.Router()


sliderRoute.route("/")
	.get(getSlider)
	.post(AddSlider)
	.delete(deleteSlider)
module.exports = sliderRoute;