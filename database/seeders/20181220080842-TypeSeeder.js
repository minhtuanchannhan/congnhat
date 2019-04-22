'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('mtcn_types', [{
			name: 'Công nhật',
			description: 'Việc làm công nhật',
			created_at: new Date(),
			updated_at: new Date()
		}, {
			name: 'Toàn thời gian',
			description: 'Việc làm toàn thời gian',
			created_at: new Date(),
			updated_at: new Date()
		}, {
			name: 'Bán thời gian',
			description: 'Việc làm bán thời gian',
			created_at: new Date(),
			updated_at: new Date()
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('mtcn_types', null, {});
	}
};
