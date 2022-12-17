const User = require("../model/user.model")


// get wishlist 
module.exports.getAllWishlistByUserService = async (userId) => {
	const user = await User.findOne({ _id: userId }).populate("wishlist.productId")
	return user
}
// add wishlist 
module.exports.addWishlistByUserService = async (userId) => {
	const user = await User.findOne({ _id: userId })
	return user
}

module.exports.deleteWishlistByUserService = async (userId, productId) => {
	const result = await User.updateOne({ _id: userId }, { $pull: { wishlist: { productId: productId } } });
	return result;
}
