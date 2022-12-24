const Logo = require("../model/logo.model");

module.exports.postAndUpdateOneService = async (data) => {

	let query = {};
	let options = {upsert: true, new: true, setDefaultsOnInsert: true};
	let model = await Logo.findOneAndUpdate(query, data, options);
	return model

}