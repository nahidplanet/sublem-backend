const User = require("../model/user.model")

module.exports.createUserService = async (data)=>{
	const result = await User.create(data)
	return result;
}