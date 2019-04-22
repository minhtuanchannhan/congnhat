const {
	User
} = require('../models');
const {
	to,
	throwError
} = require('../services/util.service');
const validator = require('validator');

const getUser = async function (userInfo) {
	let err, user;

	if (!userInfo.email) {
		throwError('Please enter an email to login.');
	}

	if (!userInfo.password) {
		throwError('Please enter a password to login.');
	}

	if (!validator.isEmail(userInfo.email)) {
		throwError('Please enter an corect email to login.');
	}

	[err, user] = await to(User.findOne({
		where: {
			email: userInfo.email
		}
	}));

	if (!user) throwError('Not registered');

	[err, user] = await to(user.comparePassword(userInfo.password));

	if (err) throwError(err.message);

	return user;
};

module.exports.getUser = getUser;
