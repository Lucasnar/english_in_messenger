'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('tweets', 'language_id', {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'languages',
        key: 'id'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('tweets', 'language_id');
  }
};
