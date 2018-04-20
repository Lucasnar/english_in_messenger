'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('twitter_accounts', [{
      name: 'BBC World',
      screen_name: 'bbcworld',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'Reuters',
      screen_name: 'reuters',
      created_at: new Date(),
      updated_at: new Date()
    },{
      name: 'Wall Street Journal',
      screen_name: 'wsj',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'The Guardian',
      screen_name: 'guardian',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'The Economist',
      screen_name: 'theeconomist',
      created_at: new Date(),
      updated_at: new Date()
    }, {
      name: 'NPR',
      screen_name: 'npr',
      created_at: new Date(),
      updated_at: new Date()
    } ], { logging: console.log });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('twitter_accounts', null, {});
  }
};
