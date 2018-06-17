'use strict';
module.exports = (sequelize, DataTypes) => {
  var Word = sequelize.define('Word', {
    word: DataTypes.STRING,
    imageUrl: { type: DataTypes.STRING, field: 'image_url' }
  }, {
    underscored: true,
    tableName: 'words',
  });

  Word.associate = function (models) {
    Word.belongsTo(models.Language);
  };

  return Word;
};
