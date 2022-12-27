module.exports.verifyUser = async (req, res, next) => {
	try {
		console.log(req.user.id);
		return res.status(200).json({ status: true, message: "verified" })
	} catch (error) {
		next(error)
	}
}