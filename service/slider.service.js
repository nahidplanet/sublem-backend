const Slider = require("../model/slider.modal");

module.exports.getSliderService = async () => {
	const result = await Slider.find();
	return result;
}
module.exports.addSliderService = async (data) => {
	const result = await Slider.create(data);
	return result;
}
module.exports.deleteSliderService = async (id) => {
	const result = await Slider.deleteOne({_id:id});
	return result;
}
