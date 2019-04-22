'use strict';

module.exports = (sequelize, DataTypes) => {
	const Job = sequelize.define('Job', {
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
		salary: {
			allowNull: true,
			type: DataTypes.STRING
		},
		noted: {
			allowNull: true,
			type: DataTypes.TEXT
		},
		is_published: {
			allowNull: false,
			type: DataTypes.BOOLEAN,
			defaultValue: false
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
		tableName: 'mtcn_jobs',
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	});

	Job.associate = function (models) {
		Job.belongsTo(models.Type, {
			onDelete: 'CASCADE',
			foreignKey: {
				name: 'type_id',
				allowNull: true
			}
		});
		Job.belongsTo(models.Category, {
			onDelete: 'CASCADE',
			foreignKey: {
				name: 'category_id',
				allowNull: true
			}
		});
		Job.belongsTo(models.Location, {
			onDelete: 'CASCADE',
			foreignKey: {
				name: 'location_id',
				allowNull: true
			}
		});
		Job.belongsTo(models.User, {
			onDelete: 'CASCADE',
			foreignKey: {
				name: 'user_id',
				allowNull: true
			}
		});
	};

	return Job;
};
