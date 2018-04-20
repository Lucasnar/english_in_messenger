'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tweet = sequelize.define('Tweet', {
    text: DataTypes.TEXT,
    url: DataTypes.STRING,
    twitterid: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'tweet',
  });

  Tweet.associate = function (models) {
    Tweet.belongsTo(models.TwitterAccount);
    Tweet.belongsTo(models.Language);
  };

  return Tweet;
};
