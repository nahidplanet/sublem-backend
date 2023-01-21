const { createUserService } = require("../service/userLoginService");
const { token } = require("../utils/createToken");

module.exports.createUser = async (req, res, next) => {
	try {
		const result = await createUserService(req.body);

		if (!result || result.length < 1) {
			return res.status(404).json({ status: false, message: "Request failed !" });
		}
		if (result) {
			const activeToken = token(result)
			return res.json({ status: true, message: "SignIn Done!", activeToken });
		}


	} catch (error) {
		next(error)
		// res.json({ message: "something is wrong" })
	}
}