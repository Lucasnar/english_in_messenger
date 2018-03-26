'use strict';
module.exports = (sequelize, DataTypes) => {
  var Language = sequelize.define('languages', {
    name: DataTypes.STRING
  });

  Language.associate = function (models) {
    // associations can be defined here
  };

  return Language;
};
