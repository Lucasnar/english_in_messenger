'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    facebookid: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'users',
  });

  User.associate = function (models) {
    // associations can be defined here
    // e.g. User.belongsTo(models.AnotherModel);
  };

  return User;
};
