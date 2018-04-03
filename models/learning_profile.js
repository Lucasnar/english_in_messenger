'use strict';
module.exports = (sequelize, DataTypes) => {
  var LearningProfile = sequelize.define('learning_profiles', {}, {
    underscored: true
  });

  LearningProfile.associate = function (models) {
    LearningProfile.belongsTo(models.User);
    LearningProfile.belongsTo(models.Language, { as: 'learning_language' });
    LearningProfile.belongsTo(models.Language, { as: 'known_language' });
  };

  return LearningProfile;
};
