'use strict';
module.exports = (sequelize, DataTypes) => {
  var Word = sequelize.define('words', {
    word: DataTypes.STRING,
    imageUrl: { type: DataTypes.STRING, field: 'image_url' }
  }, {
    underscored: true,
  });

  Word.associate = function (models) {
    Word.belongsTo(models.Language);
  };

  return Word;
};
