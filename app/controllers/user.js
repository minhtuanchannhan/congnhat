const models = require('../models');
const bcrypt = require('bcrypt');
const {
	to,
	sendSuccess,
	sendError,
	throwError
} = require('../services/util.service');
const authService = require('../services/auth.service');

module.exports = {
	async create(req, res) {
		let role, user;
		role = await models.Role.findOrCreate({
			where: {
				display_name: req.body.role || 'user'
			},
			defaults: {
				name: 'User'
			}
		}).spread(function (role, created) {
			return role.get({
				plain: true
			});
		});

		user = {
			email: req.body.email,
			password: req.body.password,
			role_id: role.id
		};

		return models.User.create(user)
			.then(function (data) {
				return sendSuccess(res, data, 201);
			})
			.catch(function (err) {
				return sendError(res, err, 422);
			});
	},
	async login(req, res) {
		let err, user;

		[err, user] = await to(models.User.findOne({
			where: {
				email: req.params.email
			}
		}));

		console.log(user);

		if (err) return sendError(res, err, 422);

		return sendSuccess(res, {
			token: user.getJWT()
		});
	},
	async get(req, res) {
		let err, user;

		[err, user] = await to(models.User.findOne(req.body.email));
		if (err) return sendError(res, err, 422);

		return sendSuccess(res, {
			token: user.getJWT()
		});
	},
	async update(req, res) {
		let err, user, data;
		user = req.user;
		data = req.body;
		user.set(data);

		[err, user] = await to(user.save());
		if (err) {
			if (err.message == 'Validation error') err = 'The email address or phone number is already in use';
			return sendError(res, err);
		}
		return sendSuccess(res, {
			message: 'Updated User: ' + user.email
		});
	}
};
