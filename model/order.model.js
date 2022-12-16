const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const OrderSchema = mongoose.Schema({

	userId: {
		type: ObjectId,
		ref: "User"
	},
	orderItems: {
		type: Array,
		default: []
	},
	orderStatus: {
		type:String,
		enum:["pending","accepted","delivered","cancel"],
		default:"pending",
	},
	DateOfPurchase: Date,

}, {
	timestamps: true
});




const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;