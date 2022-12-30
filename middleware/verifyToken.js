const jwt = require('jsonwebtoken');
const { promisify } = require('util')


module.exports.verifyToken = async (req, res, next) => {
	
	try {
		const token = req?.headers?.authorization?.split(" ")[1];
		
		
		if (token) {
			return jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
				if (err) {
					return res.json({
						status: false,
						message: "Please Login First",
					});
				}
				req.user = decoded;
				return next();
			});
		}else{

			return res.unauthorized();
		}
	} catch (error) {
		next(error)

	}
}