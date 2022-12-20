const { deleteSliderService, addSliderService, getSliderService } = require("../service/slider.service");

module.exports.getSlider = async (req, res, next) => {
	try {

		const result = await getSliderService()

		if (!result || result.length < 1) {
			return res.status(400).json({ status: false, message: "No Slider Found" })
		} else {
			return res.status(200).json({ status: true, slider:result });
		}
	} catch (error) {
		next(error)
	}
}




module.exports.AddSlider = async (req, res, next) => {
	try {
		const result = await addSliderService(req.body)
		if (!result) {
			return res.status(400).json({ status: false, message: "slider add failed" })
		} else {
			return res.status(200).json({ status: true, message: "Slider add success" });
		}

	} catch (error) {
		next(error)
	}
}
module.exports.deleteSlider = async (req, res, next) => {
	try {

		const {id} = req.query;

		const result = await deleteSliderService(id)
		if (!result) {
			return res.status(400).json({ status: false, message: "deleted failed" })
		} else {
			return res.status(200).json({ status: true, message: " deleted success" });
		}

	} catch (error) {
		next(error)
	}
}
