const mongoose = require('mongoose');

const SocialLinkSchema = mongoose.Schema({
	
	
	facebook: {
		type: String,
		trim: true,
	},
	instagram: {
		type: String,
		trim: true,
	},
	youtube: {
		type: String,
		trim: true,
	},
	twitter: {
		type: String,
		trim: true,
	},
	linkedin: {
		type: String,
		trim: true,
	},
	whatsApp: {
		type: String,
		trim: true,
	}

}, {
	timestamps: true
});

const Social = mongoose.model("Social", SocialLinkSchema);
module.exports = Social;