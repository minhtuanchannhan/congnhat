const config = require('./config');

module.exports = {
	'development': {
		'database': config.db_name,
		'username': config.db_user,
		'password': config.db_password,
		'host': config.db_host,
		'dialect': config.db_dialect
	},

	'test': {
		'database': config.db_name,
		'username': config.db_user,
		'password': config.db_password,
		'host': config.db_host,
		'dialect': config.db_dialect
	},

	'production': {
		'database': config.db_name,
		'username': config.db_user,
		'password': config.db_password,
		'host': config.db_host,
		'dialect': config.db_dialect
	}
};
