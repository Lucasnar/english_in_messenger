'use strict';

const db = require('../../models/index.js');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return db.Language.find({
      where: { name: 'English' }
    }).then(function(english) {
      let englishId = english.dataValues.id
      queryInterface.bulkInsert('twitter_accounts', [{
        name: 'BBC World',
        screen_name: 'bbcworld',
        language_id: englishId,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        name: 'Reuters',
        screen_name: 'reuters',
        language_id: englishId,
        created_at: new Date(),
        updated_at: new Date()
      },{
        name: 'Wall Street Journal',
        screen_name: 'wsj',
        language_id: englishId,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        name: 'The Guardian',
        screen_name: 'guardian',
        language_id: englishId,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        name: 'The Economist',
        screen_name: 'theeconomist',
        language_id: englishId,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        name: 'NPR',
        screen_name: 'npr',
        language_id: englishId,
        created_at: new Date(),
        updated_at: new Date()
      } ], { logging: console.log });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('twitter_accounts', null, {});
  }
};
