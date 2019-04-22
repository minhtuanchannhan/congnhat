'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};
const config = require('../../config/config');

const sequelize = new Sequelize(config.db_name, config.db_user, config.db_password, {
	host: config.db_host,
	dialect: config.db_dialect,
	port: config.db_port,
	operatorsAliases: false,
	timezone: '+07:00',
	define: {
		charset: 'utf8',
		collate: 'utf8_general_ci'
	}
});

fs.readdirSync(__dirname)
	.filter((file) => {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
	})
	.forEach((file) => {
		let model = sequelize['import'](path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
