'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tweets = sequelize.define('tweets', {
    text: DataTypes.TEXT,
    url: DataTypes.STRING,
    twitterid: DataTypes.STRING
  });

  Tweets.associate = function (models) {
    Tweets.belongsTo(models.TwitterAccount);
  };

  return Tweets;
};
