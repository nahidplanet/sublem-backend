const { createUserService } = require("../service/userLoginService");
const { token } = require("../utils/createToken");

module.exports.createUser = async (req, res, next) => {
console.log("user login controllers",req.headers);
	try {
		const result = await createUserService(req.body);
		
		if (!result || result.length < 1) {
			return res.status(404).json({ status: false, message: "Request failed !" });
		}
		const activeToken = token(result)
		res.status(200).json({ status: true, message: "SignIn Done!", activeToken });

	} catch (error) {
		next(error)
	}
}