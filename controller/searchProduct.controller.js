// =============================
// search

const { searchProductService } = require("../service/searchProduct.Service");

// =============================
module.exports.searchProduct = async (req, res, next) => {
	try {
		let filters = { ...req.query };
		const queries = {};
		const excludeFields = ['sort', 'page', 'limit', "field", "price"]
		excludeFields.forEach(field => delete filters[field]);

		let filterString = JSON.stringify(filters);
		filterString = filterString.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`);
		filters = JSON.parse(filterString);

		if (req.query.search) {
			const searchBy = req.query.search//.split(' ').join(' ');
			
			queries.search = searchBy;
		}


		const data = await searchProductService(filters,queries);
		if (!data || data.length < 1) {
			res.status(200).json({ status: false, message: "something wrong " });
		} else {
			res.status(200).json({ status: true, data: data });
		}
	} catch (error) {
		next(error)
	}
}