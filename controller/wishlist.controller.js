const User = require("../model/user.model");
const { addWishlistByUserService, getAllWishlistByUserService, deleteWishlistByUserService } = require("../service/wishlist.service");


// add wishlist 
module.exports.addWishlistByUser = async (req, res, next) => {
	try {
		const userId = req.user.id;
		const productId = req.body.productId;
		


		const user = await addWishlistByUserService(userId);
		
		if (!user || user.length < 1) {
			return res.status(404).json({ status: false, message: "Login Require" });
		} else {
			const findResult = await User.findOne({email:user.email, "wishlist.productId": { $in: [productId] } })
			
			if (!findResult) {
				const result = await User.updateOne({ _id: userId }, { $push: { wishlist: { productId } } });

				if (!result || result.length < 1) {
					return res.status(400).json({ status: false, message: "Login Require" });
				} else {
					return res.status(200).json({ status: true, message: "Added wishlist" });
				}
			} else {
				return res.status(200).json({ status: true, message: "Already added" });

			}

		}


	} catch (error) {
		next(error)
	}
}


// get wishlist by user 

module.exports.getAllWishlistByUser = async (req, res, next) => {
	try {
		const userId = req.user.id;
		const result = await getAllWishlistByUserService(userId);

		if (!result || result.length < 1) {
			return res.status(400).json({ status: false, message: "Login Require" });
		} else {
			res.status(200).json({ status: true, wishlist: result });

		}

	} catch (error) {

	}
}


// product delete to cart 
module.exports.deleteWishlistByUser = async (req, res, next) => {

	try {
		const productId = req.params?.productId

		const userId = req?.user?.id;
		const result = await deleteWishlistByUserService(userId, productId);

		if (!result) {
			return res.status(400).json({ status: false, message: "Deleted failed" })
		} else {
			res.status(200).json({ status: true, message: "Deleted success" })
		}
	} catch (error) {
		next(error)
	}
}