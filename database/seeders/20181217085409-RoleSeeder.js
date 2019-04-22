'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('mtcn_roles', [{
			name: 'Administrator',
			display_name: 'administrator',
			description: 'Admin roles.',
			created_at: new Date(),
			updated_at: new Date()
		}, {
			name: 'Users',
			display_name: 'user',
			description: 'User roles.',
			created_at: new Date(),
			updated_at: new Date()
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('mtcn_roles', null, {});
	}
};
