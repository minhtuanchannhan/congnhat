'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('mtcn_types', {
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
		return queryInterface.dropTable('mtcn_types');
	}
};
