const { postAndUpdateOneService } = require("../service/logo.service")

module.exports.postAndUpdateOne = async (req, res, next) => {
	try {
		const result = await postAndUpdateOneService(req.body)
		console.log(req.body);
		if (!result) {
			return res.status(400).json({ status: false, message: "update failed" })
		}
		res.status(400).json({ status: true, message: "update success" })

	} catch (error) {
		next(error)
	}
}