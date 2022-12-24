const mongoose = require('mongoose');

const ServiceCategorySCheme = mongoose.Schema({

	
	serviceCategory:{
		type:String,
		trim: true,
	},
	WallPainting:{
		type:String,
		trim: true,
	},
	CabinetDesign:{
		type:String,
		trim: true,
	},
	gypsumDesign:{
		type:String,
		trim: true,
	}

}, {
	timestamps: true
});

const ServiceModel = mongoose.model("ServiceModel", ServiceCategorySCheme);
module.exports = ServiceModel;