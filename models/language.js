'use strict';
module.exports = (sequelize, DataTypes) => {
  var Language = sequelize.define('Language', {
    name: DataTypes.STRING
  }, {
    underscored: true,
    tableName: 'languages',
  });

  Language.associate = function (models) {
    // associations can be defined here
  };

  return Language;
};
