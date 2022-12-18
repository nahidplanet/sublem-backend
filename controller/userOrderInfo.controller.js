const User = require("../model/user.model");
const { userOrderSubmitService } = require("../service/userOrderInfo.service");


module.exports.userOrderSubmit = async (req, res, next) => {

	try {
		const data = req.body;
		const userId = req.user.id;
		const user = await User.findOne({ _id: userId })
		if (!user || user.length < 1) {
			res.status(400).json({ status: false, message: "Un-Authorize access" });
		} else {
			const result = await User.updateOne({ _id: userId }, data)
			if (!result || result.length < 1) {
				return res.status(400).json({ status: false, message: "Something is wrong" });
			}
			res.status(200).json({ status: true, message: "Order Submitted " });
		}
	} catch (error) {
		next(error)
	}
}