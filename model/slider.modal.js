const mongoose = require('mongoose');

const SliderSchema = mongoose.Schema({

	name: {
		required:[true,'product name is required'],
		type: String,
		trim: true,
		lowercase: true,
		
	},
	image: {
		required:[true,'product name is required'],
		type: String,
		trim: true,
	},
	AddedDate: Date,

}, {
	timestamps: true
});

const Slider = mongoose.model("Slider", SliderSchema);
module.exports = Slider;