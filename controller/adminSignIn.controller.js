

const User = require("../model/user.model");

module.exports.adminSignIn = async (req, res, next) => {
	try {
		const userId = req.user.id;
		const email = req.user.email;
		const role = req.user.role;

		const admin = await User.findOne({ _id: userId, email: email });
		if (!admin) {
			return res.status(403).json({ status: false, message: "Unauthorize access" })
		}else{
			if (admin.role !== "admin") {
				return res.status(403).json({ status: false,admin:false, message: "Unauthorize access" })
			}else{
				return res.status(200).json({ status: true,admin:true, message: "Admin Logged-In" });
			}
		}

	} catch (error) {
		next(error)
	}
}












