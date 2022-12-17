

const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types

const userSchema = mongoose.Schema({
	fullName: {
		type: String,
		minLength: [3, 'your full name must be at least 3 characters'],
		lowercase: true,
		trim: true
	},
	addressOne: {
		type: String,
		lowercase: true,
		trim: true
	},
	addressTwo: {
		type: String,
		lowercase: true,
		trim: true
	},
	mobileNumber: {
		type: String,
		validate: [validator.isMobilePhone, "please provide a valid contact number"],

	},
	email: {
		type: String,
		validate: [validator.isEmail, "please provide a valid email"],
		lowercase: true,
		trim: true
	},
	role: {
		type: String,
		enum: ["admin", "user", "editor"],
		default: "user"
	},
	cartItems: [
		{
			productId: {
				type: ObjectId,
				ref: "Product",
				required: [true, "productId is required"]
			},
			price: {
				type: Number,
				required: [true, "cart product price required"]
			},
			quantity: {
				type: Number,
				default: 1
			}
		}
	],

	wishlist: [
		{
			productId: {
				type: ObjectId,
				ref: "Product"
			}
		}
	],
	username: {
		type: String,
		minLength: [3, 'your user name must be at least 3 characters'],
		lowercase: true,
		trim: true
	},
	status: {
		type: String,
		enum: ["active", "inactive", "block"],
		default: "active"
	},
}, {
	timestamps: true
});



const User = mongoose.model("User", userSchema);
module.exports = User;