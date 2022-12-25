const { homeCategoryPicService, getLinksService } = require("../service/socialLink.service")

module.exports.homeCategoryPic = async (req, res, next) => {
	try {
		const result = await homeCategoryPicService(req.body)
		
	
		if (!result) {
			return res.status(400).json({ status: false, message: "update failed" })
		}
		res.status(400).json({ status: true, message: "update success" })

	} catch (error) {
		next(error)
	}
}
module.exports.getLinks = async (req, res, next) => {
	try {
		const result = await getLinksService()
		
	
		if (!result) {
			return res.status(400).json({ status: false, message: "Link not found" })
		}
		res.status(400).json({ status: true, links:result })

	} catch (error) {
		next(error)
	}
}