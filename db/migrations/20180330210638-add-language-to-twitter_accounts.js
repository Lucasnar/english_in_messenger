'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('twitter_accounts', 'language_id', {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'languages',
        key: 'id'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('twitter_accounts', 'language_id');
  }
};
