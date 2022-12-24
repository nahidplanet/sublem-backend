const mongoose = require('mongoose');

const HomeCategorySchema = mongoose.Schema({

	homeCategory: {
		type: String,
		trim: true,
	},
	homeSofa: {
		type: String,
		trim: true,
	},
	homeCurtain: {
		type: String,
		trim: true,
	},
	homeBed: {
		type: String,
		trim: true,
	},
	homeMattress: {
		type: String,
		trim: true,
	},
	homeWallpaper: {
		type: String,
		trim: true,
	},
	homeCarpet: {
		type: String,
		trim: true,
	}

}, {
	timestamps: true
});

const HomeCategoryModal = mongoose.model("HomeCategoryModal", HomeCategorySchema);
module.exports = HomeCategoryModal;