'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('mtcn_categories', [{
			name: 'Kế toán',
			description: 'Kế toán',
			created_at: new Date(),
			updated_at: new Date()
		}, {
			name: 'Bất động sản',
			description: 'Bất động sản',
			created_at: new Date(),
			updated_at: new Date()
		}, {
			name: 'CNTT',
			description: 'CNTT',
			created_at: new Date(),
			updated_at: new Date()
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('mtcn_categories', null, {});
	}
};
