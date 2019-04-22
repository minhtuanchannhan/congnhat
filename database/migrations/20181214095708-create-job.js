'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('mtcn_jobs', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING
			},
			description: {
				allowNull: true,
				type: Sequelize.TEXT
			},
			content: {
				allowNull: true,
				type: Sequelize.TEXT
			},
			salary: {
				allowNull: true,
				type: Sequelize.STRING
			},
			noted: {
				allowNull: true,
				type: Sequelize.TEXT
			},
			user_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'mtcn_users',
					key: 'id'
				},
			},
			category_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'mtcn_categories',
					key: 'id'
				},
			},
			type_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'mtcn_types',
					key: 'id'
				},
			},
			location_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'mtcn_locations',
					key: 'id'
				},
			},
			is_published: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
				defaultValue: false
			},
			is_deleted: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
				defaultValue: false
			},
			deleted_at: {
				allowNull: true,
				type: Sequelize.DATE
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('mtcn_jobs');
	}
};
