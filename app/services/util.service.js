const {
	to
} = require('await-to-js');
const pe = require('parse-error');

module.exports.to = async (promise) => {
	let err, res;

	[err, res] = await to(promise);
	if (err) return [pe(err)];

	return [null, res];
};

// Error response
module.exports.sendError = function (res, err, code) {
	if (typeof err == 'object' && typeof err.message != 'undefined') {
		err = err.message;
	}

	if (typeof code !== 'undefined') res.statusCode = code;

	return res.json({
		status: {
			type: 'error',
			code: code,
			message: err,
			error: true
		},
		data: false
	});
};

// Success response
module.exports.sendSuccess = function (res, data, code) {
	let result = {
		status: {
			type: 'success',
			code: code,
			message: 'Success',
			error: false
		},
		data: data
	};

	if (!data) {
		result.status.message = 'Resources not found.';
	}

	if (typeof code !== 'undefined') res.statusCode = code;

	return res.json(result);
};

// Throw error
module.exports.throwError = function (err_message, log) {
	if (log === true) {
		console.error(err_message);
	}

	throw new Error(err_message);
};
