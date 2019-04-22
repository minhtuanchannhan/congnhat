const models = require('../models');
const {
	sendSuccess,
	sendError,
	throwError
} = require('../services/util.service');

module.exports = {
	list(req, res) {
		return models.Category
			.findAll({
				order: [
					['created_at', 'DESC']
				]
			})
			.then(function (data) {
				return sendSuccess(res, data, 200);
			})
			.catch(function (err) {
				return sendError(res, err, 500);
			});
	},
	get(req, res) {
		return models.Category
			.findOne({
				where: {
					id: req.params.id
				}
			})
			.then(function (data) {
				return sendSuccess(res, data, 200);
			})
			.catch(function (err) {
				return sendError(res, err, 500);
			});
	},
};
