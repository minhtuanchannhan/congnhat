'use strict';

module.exports = (sequelize, DataTypes) => {
	const Location = sequelize.define('Location', {
		name: {
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
		tableName: 'mtcn_locations',
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	});

	Location.associate = function (models) {
		Location.hasMany(models.Job, {
			foreignKey: 'location_id'
		});
	};

	return Location;
};
