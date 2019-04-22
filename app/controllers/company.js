const models = require('../models');
const {
	sendSuccess,
	sendError,
	throwError
} = require('../services/util.service');

module.exports = {
	list(req, res) {
		return models.Company
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
		return models.Company
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
