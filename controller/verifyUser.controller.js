module.exports.verifyUser = async (req, res, next) => {
	try {
		return res.status(200).json({ status: true, message: "verified" })
	} catch (error) {
		next(error)
	}
}