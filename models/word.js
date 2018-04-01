'use strict';
module.exports = (sequelize, DataTypes) => {
  var Word = sequelize.define('words', {
    word: DataTypes.STRING,
    image_url: DataTypes.STRING
  }, {
    underscored: true,
  });

  Word.associate =  function (models) {
    Word.belongsTo(models.Language);
  };

  return Word;
};
