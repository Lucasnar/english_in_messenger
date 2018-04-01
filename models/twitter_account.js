'use strict';
module.exports = (sequelize, DataTypes) => {
  var TwitterAccount = sequelize.define('twitter_accounts', {
    name: DataTypes.STRING,
    screenName: { type: DataTypes.STRING, field: 'screen_name' },
    twitterid: DataTypes.STRING
  });

  TwitterAccount.associate = function (models) {
    TwitterAccount.belogsTo(models.Languages);
  };

  return TwitterAccount;
};
