module.exports.errorHandler = (error,req,res,next) =>{
	if (error) {
		// return	res.status(500).json({status:false,message:"505 server problem",error:error.message})
		console.log(error);
		
		return	res.status(500).json({status:false,message:"505 server problem",error:error.message})
		
	}
}