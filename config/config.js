require('dotenv').config();
let config = {};

// Application...
config.app = process.env.APP || 'development';
config.port = process.env.PORT || '3000';

// Database
config.db_dialect = process.env.DB_DIALECT || 'mysql';
config.db_host = process.env.DB_HOST || 'localhost';
config.db_port = process.env.DB_PORT || '3306';
config.db_name = process.env.DB_NAME || 'db_name';
config.db_user = process.env.DB_USER || 'db_user';
config.db_password = process.env.DB_PASSWORD || '';

// JWT
config.jwt_encryption = process.env.JWT_ENCRYPTION || 'jwt_encryption';
config.jwt_expiration = process.env.JWT_EXPIRATION || '86400';

module.exports = config;
