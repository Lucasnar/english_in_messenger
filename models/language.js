'use strict';
module.exports = (sequelize, DataTypes) => {
  var Language = sequelize.define('languages', {
    name: DataTypes.STRING
  }, {
    underscored: true
  });

  Language.associate = function (models) {
    // associations can be defined here
  };

  return Language;
};
