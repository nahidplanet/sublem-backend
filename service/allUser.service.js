const User = require("../model/user.model")

module.exports.getAllUserByAdminService = async (filters, queries) => {
	const users = await User.find()
		.skip(queries.skip)
		.limit(queries.limit)

	const totalUser = await User.countDocuments(filters);
	const totalPage = Math.ceil(totalUser / queries.limit)
	return { totalPage, totalUser, users };
}
module.exports.userUpdateRoleByAdminService = async (userId,role) => {
	const result = await User.updateOne({ _id: userId },{role:role})
	return result;
}
// user dashboard 
module.exports.getUserByIdService = async (userId) => {
	const result = await User.findOne({ _id: userId });
	return result;
}