const express = require('express');
const app = express();
const cors = require('cors');

const productRoute = require('./routes/v1/product.route');
// const adminRoute = require('./routes/v1/adminLogin.route');
const cartRoute = require('./routes/v1/cart.route');
// const userRoute = require('./routes/v1/user.route');
const orderRoute = require('./routes/v1/order.route');

// user login 
const userLoginRoute = require('./routes/v1/userLogin.route');
const userOrderInfoRoute = require('./routes/v1/userOrderInfo.route');


app.use(cors());
app.use(express.json());
app.use(express.static("public"));


//* =======================================
// admin Login
// ======================================= 
app.use("/api/v1/create-user",userLoginRoute);


// =======================================
// product routes
// =======================================

app.use("/api/v1/product/",productRoute);
// product add to cart
app.use("/api/v1/product/cart",cartRoute);
// product add wishlist
// app.use("/api/v1/product/wishlist");
// product order
app.use("/api/v1/order-info",userOrderInfoRoute);
app.use("/api/v1/order-submitted",orderRoute);







app.get("/", (req, res, next) => {
	res.status(200).send("welcome to sublem.com")
});
app.get("*", (req, res, next) => {
	res.status(404).send("Requested url is not found!")
});


module.exports = app;
