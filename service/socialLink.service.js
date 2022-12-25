const Social = require("../model/SocialLink");

module.exports.homeCategoryPicService = async (data)=>{
	let query = {};
	let options = {upsert: true, new: true, setDefaultsOnInsert: true};
	let model = await Social.findOneAndUpdate(query, data, options);
	return model
}
module.exports.getLinksService = async ()=>{
	let model = await Social.find();
	return model
}