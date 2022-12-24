const mongoose = require('mongoose');

const LogoSchema = mongoose.Schema({

	mainLogo: {
		type: String,
		trim: true,
		lowercase: true,
	},
	mobileLogo: {
		type: String,
		trim: true,
	},
	

}, {
	timestamps: true
});

const Logo = mongoose.model("Logo", LogoSchema);
module.exports = Logo;