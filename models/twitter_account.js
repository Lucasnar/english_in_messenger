'use strict';
module.exports = (sequelize, DataTypes) => {
  var TwitterAccount = sequelize.define('TwitterAccount', {
    name: DataTypes.STRING,
    screenName: { type: DataTypes.STRING, field: 'screen_name' },
    twitterid: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'twitter_accounts',
  });

  TwitterAccount.associate = function (models) {
    TwitterAccount.belongsTo(models.Language);
  };

  return TwitterAccount;
};
