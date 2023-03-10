const User = require("../model/user.model")

// add to cart 
module.exports.addToCartService = async (userId, productInfo) => {
	// const { productId, price, quantity } = productInfo;

	const cart = await User.findOne({ _id: userId });
	return cart


}
// user get all carts
module.exports.userGetCartService = async (userId) => {
	const cart = await User.findOne({_id:userId}).populate("cartItems.productId")
	return cart
}
// delete to cart 
module.exports.deleteToCartService = async (userId, productId) => {
	const result = await User.updateOne(
		{ _id: userId },
		{ $pull: { cartItems: { productId: productId } } }
	);
	return result;
}



// delete all cart 
module.exports.deleteFullCartService = async (userId) => {

	const result = await User.updateOne(
		{ _id: userId },
		{ $set: { cart: [] } }
	)
	return result;


}
