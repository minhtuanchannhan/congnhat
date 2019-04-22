'use strict';

module.exports = (sequelize, DataTypes) => {
	const Company = sequelize.define('Company', {
		name: {
			allowNull: false,
			type: DataTypes.STRING
		},
		description: {
			allowNull: true,
			type: DataTypes.TEXT
		},
		content: {
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
		tableName: 'mtcn_companies',
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	});

	return Company;
};
