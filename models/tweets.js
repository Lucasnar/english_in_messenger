'use strict';
module.exports = (sequelize, DataTypes) => {
  var tweets = sequelize.define('tweets', {
    text: DataTypes.TEXT,
    url: DataTypes.STRING,
    twitterid: DataTypes.STRING
  });

  tweets.associate = function (models) {
    tweets.belongsTo(models.TwitterAccount);
  };

  return tweets;
};
