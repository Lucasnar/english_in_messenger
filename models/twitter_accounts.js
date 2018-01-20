'use strict';
module.exports = (sequelize, DataTypes) => {
  var TwitterAccounts = sequelize.define('twitter_accounts', {
    name: DataTypes.STRING,
    screenName: { type: DataTypes.STRING, field: 'screen_name' },
    twitterid: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TwitterAccounts;
};
