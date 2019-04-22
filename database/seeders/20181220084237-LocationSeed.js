'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('mtcn_locations', [{
			name: 'Hà Nội',
			description: 'Việc làm công nhật ở Hà Nội',
			created_at: new Date(),
			updated_at: new Date()
		}, {
			name: 'Hồ Chí Minh',
			description: 'Việc làm công nhật ở thành phố Hồ Chí Minh',
			created_at: new Date(),
			updated_at: new Date()
		}, {
			name: 'Đà Nẵng',
			description: 'Việc làm công nhật ở Đà Nẵng',
			created_at: new Date(),
			updated_at: new Date()
		}, {
			name: 'Nha Trang',
			description: 'Việc làm công nhật ở Nha Trang',
			created_at: new Date(),
			updated_at: new Date()
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('mtcn_locations', null, {});
	}
};
