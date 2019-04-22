'use strict';

module.exports = (sequelize, DataTypes) => {
	const Role = sequelize.define('Role', {
		name: {
			allowNull: false,
			type: DataTypes.STRING
		},
		display_name: {
			allowNull: false,
			type: DataTypes.STRING
		},
		description: {
			allowNull: true,
			type: DataTypes.TEXT
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
		tableName: 'mtcn_roles',
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	});

	Role.associate = function (models) {
		Role.hasMany(models.User, {
			foreignKey: 'role_id'
		});
	};

	return Role;
};
