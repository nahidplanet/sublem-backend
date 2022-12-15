const User = require("../model/user.model");
const { token } = require("../utils/createToken");

module.exports.checkExistUser = async (req, res, next) => {
	try {
		const { email, username } = req.body;
		if (email && username) {
			const user = await User.findOne({ email: email, username: username });
			if (!user || user.length < 1) {
				next();
				// return res.status(400).json({ status: false, message: "Request failed !", });
			}
			const activeToken = token(user);
			res.status(200).json({ status: true, message: "SignIn Done!", activeToken });
			
		}
		
	} catch (error) {
		next(error)
	}

}


