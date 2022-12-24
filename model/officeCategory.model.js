const mongoose = require('mongoose');

const OfficeCategorySchema = mongoose.Schema({

	
	officeCategory:{
		type:String,
		trim: true,
	},
	officeSofa:{
		type:String,
		trim: true,
	},
	officeCurtain:{
		type:String,
		trim: true,
	},
	officeWallpaper:{
		type:String,
		trim: true,
	},
	officeCarpet:{
		type:String,
		trim: true,
	}

}, {
	timestamps: true
});

const OfficeModel = mongoose.model("OfficeModel", OfficeCategorySchema);
module.exports = OfficeModel;