'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('mtcn_users', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			email: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			password: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			first_name: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			last_name: {
				allowNull: true,
				type: Sequelize.STRING,
			},
			role_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'mtcn_roles',
					key: 'id'
				},
			},
			is_activated: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
				defaultValue: false,
			},
			activated_at: {
				allowNull: true,
				type: Sequelize.DATE,
			},
			login_at: {
				allowNull: true,
				type: Sequelize.DATE
			},
			logout_at: {
				allowNull: true,
				type: Sequelize.DATE
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
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('mtcn_users');
	},
};
