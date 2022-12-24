const mongoose = require('mongoose');

const ArabicCategorySchema = mongoose.Schema({

	arabicCategory: {
		type: String,
		trim: true,
	},
	arabicSofa: {
		type: String,
		trim: true,
	},
	arabicCurtain: {
		type: String,
		trim: true,
	},
	arabicBed: {
		type: String,
		trim: true,
	},
	arabicMattress: {
		type: String,
		trim: true,
	},
	arabicWallpaper: {
		type: String,
		trim: true,
	},
	arabicCarpet: {
		type: String,
		trim: true,
	}
}, {
	timestamps: true
});

const ArabicModel = mongoose.model("ArabicModel", ArabicCategorySchema);
module.exports = ArabicModel;