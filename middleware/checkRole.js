const User = require("../model/user.model");

module.exports.checkRole = (...roles) => {
	return async (req, res, next) => {
		const role = req?.user?.role;
		if (!roles.includes(role)) {
			return res.status(403).json({ status: false, message: "Unauthorize access" })
		}
		next()
	}
}