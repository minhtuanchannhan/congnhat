'use strict';

module.exports = (sequelize, DataTypes) => {
	const Type = sequelize.define('Type', {
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
		tableName: 'mtcn_types',
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	});

	Type.associate = function (models) {
		Type.hasMany(models.Job, {
			foreignKey: 'type_id'
		});
	};

	return Type;
};
