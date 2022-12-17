const express = require('express');
const { addWishlistByUser, getAllWishlistByUser, deleteWishlistByUser } = require('../../controller/wishlist.controller');
const { verifyToken } = require('../../middleware/verifyToken');

const wishlistRoute = express.Router()

wishlistRoute.route("/")
	
	.post(verifyToken, addWishlistByUser)
wishlistRoute.route("/all")
	
.get(verifyToken, getAllWishlistByUser)


wishlistRoute.route("/delete/:productId")
	.delete(verifyToken,deleteWishlistByUser);




module.exports = wishlistRoute;

