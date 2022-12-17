const { getAllUserByAdminService, userDeleteByAdminService, getUserByIdService } = require("../service/allUser.service");

module.exports.getAllUserByAdmin = async (req,res,next)=>{
	try {
			// step 0: copy the query ;
			let filters = { ...req.query };
			const queries = {};
			const excludeFields = ['sort', 'page', 'limit', "field", "price"]
			excludeFields.forEach(field => delete filters[field]);
	
			let filterString = JSON.stringify(filters);
			filterString = filterString.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
			filters = JSON.parse(filterString);
	
			if (req.query.sort) {
				const sortBy = req.query.sort.split(',').join(' ');
				queries.sortBy = sortBy;
			}
	
			if (req.query.field) {
				const fieldBy = req.query.field.split(',').join(' ');
				queries.field = fieldBy;
			}
	
			if (req.query.category) {
				const categoryBy = req.query.category.split(',').join(' ');
				queries.category = categoryBy;
			}
	
			if (req.query.page || req.query.limit) {
	
				//{{URL}}/product?sort=price,-name&field=name,price,-_id&category=home&page=2&limit=10
				const { page = 1, limit = 10 } = req.query;
				const skip = (page - 1) * parseInt(limit)
	
	
	
				queries.skip = skip;
				queries.limit = parseInt(limit);
			}

		const users = await getAllUserByAdminService(filters, queries);
	if (!users || users.length > 1) {
		return res.status(400).json({status:false,message:"User Not Found"})
	}
	res.status(200).json({status:true,users})
	} catch (error) {
		next(error)
	}

}






// user delete by admin by id 

module.exports.userDeleteByAdmin = async (req,res,next) =>{
	try {
		const userId = req.params.id;
		console.log(userId);
		const result = await userDeleteByAdminService(userId);
		if (!result || result.length < 1) {
			return res.status(400).json({status:false,message:"user delete failed!"})
		}
		 res.status(200).json({status:true,message:"user delete successful!"})
		
	} catch (error) {
		
	}
}








// get user  by client side by id 
module.exports.getUserById = async (req,res,next) =>{
	try {
		const userId = req.user.id;
		const user = await getUserByIdService(userId);
		if (!user || user.length < 1) {
			return res.status(401).json({status:false,message:"UnAuthorize access!"})
		}
		 res.status(200).json({status:true,user})
		
	} catch (error) {
		next(error)
	}
}