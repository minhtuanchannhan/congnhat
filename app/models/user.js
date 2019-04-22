'use strict';

const bcrypt = require('bcrypt');
const bcrypt_p = require('bcrypt-promise');
const jwt = require('jsonwebtoken');
const {
	to,
	throwError
} = require('../services/util.service');
const config = require('../../config/config');

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		email: {
			allowNull: false,
			type: DataTypes.STRING,
			validate: {
				notEmpty: {
					msg: 'Email is required field.'
				},
				isEmail: {
					msg: 'Email format is not correct.'
				},
			}
		},
		password: {
			allowNull: false,
			type: DataTypes.STRING,
			validate: {
				notEmpty: {
					msg: 'Password is required field.'
				}
			}
		},
		first_name: {
			allowNull: true,
			type: DataTypes.STRING,
		},
		last_name: {
			allowNull: true,
			type: DataTypes.STRING,
		},
		is_activated: {
			allowNull: false,
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		activated_at: {
			allowNull: true,
			type: DataTypes.DATE,
		},
		login_at: {
			allowNull: true,
			type: DataTypes.DATE
		},
		logout_at: {
			allowNull: true,
			type: DataTypes.DATE
		},
		is_deleted: {
			allowNull: false,
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
		deleted_at: {
			allowNull: true,
			type: DataTypes.DATE
		},
	}, {
		tableName: 'mtcn_users',
		indexes: [{
			unique: true,
			fields: ['email']
		}, ],
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	});

	User.associate = function (models) {
		User.belongsTo(models.Role, {
			onDelete: 'CASCADE',
			foreignKey: {
				name: 'role_id',
				allowNull: true
			}
		});
	};

	User.beforeSave(async (user, options) => {
		let err;
		if (user.changed('password')) {
			let salt, hash;
			[err, salt] = await to(bcrypt.genSalt(10));

			if (err) throwError(err.message, true);

			[err, hash] = await to(bcrypt.hash(user.password, salt));

			if (err) throwError(err.message, true);

			user.password = hash;
		}
	});

	User.prototype.comparePassword = async function (pw) {
		let err, pass;
		if (!this.password) throwError('Password not set.');
		console.log(this.password);
		[err, pass] = await to(bcrypt_p.compare(pw, this.password));
		if (err) throwError(err);

		if (!pass) throwError('Invalid password.');

		return this;
	};

	User.prototype.getJWT = function () {
		let expiration_time = parseInt(config.jwt_expiration);

		return jwt.sign({
			email: this.email
		}, config.jwt_encryption, {
			expiresIn: expiration_time
		});
	};

	User.prototype.toWeb = function (pw) {
		let json = this.toJSON();

		return json;
	};

	return User;
};
