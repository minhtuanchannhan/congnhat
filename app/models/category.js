'use strict';

module.exports = (sequelize, DataTypes) => {
	const Category = sequelize.define('Category', {
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
		tableName: 'mtcn_categories',
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	});

	Category.associate = function (models) {
		Category.hasMany(models.Job, {
			foreignKey: 'category_id'
		});
	};

	return Category;
};
