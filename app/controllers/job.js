const models = require('../models');
const {
	sendSuccess,
	sendError,
	throwError,
	to
} = require('../services/util.service');

module.exports = {
	list(req, res) {
		return models.Job
			.findAll({
				where: {
					is_deleted: false,
					is_published: true
				},
				order: [
					['created_at', 'DESC'],
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
		return models.Job
			.findOne({
				where: {
					id: req.params.id,
					is_deleted: false,
					is_published: true
				}
			})
			.then(function (data) {
				return sendSuccess(res, data, 200);
			})
			.catch(function (err) {
				return sendError(res, err, 500);
			});
	},
	async create(req, res) {
		let job = req.body;

		return models.Job.create(job)
			.then(function (data) {
				return sendSuccess(res, data, 201);
			})
			.catch(function (err) {
				return sendError(res, err, 422);
			});
	}
};
