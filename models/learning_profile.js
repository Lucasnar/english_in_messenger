'use strict';
module.exports = (sequelize, DataTypes) => {
  var LearningProfile = sequelize.define('LearningProfile', {}, {
    underscored: true,
    tableName: 'learning_profiles',
  });

  LearningProfile.associate = function (models) {
    LearningProfile.belongsTo(models.User);
    LearningProfile.belongsTo(models.Language, { as: 'learning_language' });
    LearningProfile.belongsTo(models.Language, { as: 'known_language' });
  };

  return LearningProfile;
};
