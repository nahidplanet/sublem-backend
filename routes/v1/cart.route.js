const express = require('express');
const { addToCart, deleteToCart, deleteFullCart, userGetCart, decrementOneItemFromCart,getCartForUserDashBoardByEmail } = require('../../controller/cart.controller');
// const { checkEmailVerify } = require('../../middleware/checkEmailVerify');
const { verifyToken } = require('../../middleware/verifyToken');
const { checkRole } = require('../../middleware/checkRole');

const cartRoute = express.Router()


cartRoute.route("/user/")
	// user get all carts 
	.get(verifyToken,   userGetCart)
	// user add a new cart
	.post(verifyToken,   addToCart)
cartRoute.route("/user/decrement/")
	// user decrement a product from cart
	.post(verifyToken,   decrementOneItemFromCart)

// cartRoute.route("/user-save-cart/")
// 	.get(verifyToken, checkRole("user"),getCartForUserDashBoardByEmail)

cartRoute.route("/deleteFull")
	.delete(verifyToken,   deleteFullCart);


cartRoute.route("/delete/:productId")
	.delete(verifyToken,   deleteToCart);



module.exports = cartRoute;

