const { addProductFreeService } = require("../service/addProductFree.service");
const { updateFreeProductService } = require("../service/updateFreeProduct.service");

module.exports.addProductFree = async (req, res, next) => {
	try {
		const result = await addProductFreeService(req.body);
		if (!result) {
			return res.status(400).json({ status: false, message: "Uploaded Failed" })
		} else {
			res.status(200).json({ status: true, message: "Uploaded success" })
		}
	} catch (error) {
		next(error)
	}
}



module.exports.updateFreeProduct = async (req, res, next) => {
	try {
		const {id} = req.query
		const result = await updateFreeProductService(id,req.body);
		
		if (!result || result.length < 1) {
			
			return res.status(400).json({ status: false, message: "Update Failed" })
		} else {
			res.status(200).json({ status: true, message: "Update success" })

		}
	} catch (error) {
		next(error)
	}
}