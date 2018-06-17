'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('languages', [{
      name: 'Portuguese',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'English',
      created_at: new Date(),
      updated_at: new Date()
    }], { logging: console.log });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('languages', null, {});
  }
};
