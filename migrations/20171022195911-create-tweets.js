'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable("tweets", {
    id: { type: "int", primaryKey: true, autoIncrement: true },
    text: "text",
    url: "string",
    twitterid: "string",
    twitter_account_id: {
      type: "int",
      notNull: true,
      foreignKey: {
        name: 'tweets_twitter_account_id_fk',
        table: 'twitter_accounts',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'id'
      }
    }
  });
};

exports.down = function(db) {
  return db.dropTable("tweets");
};

exports._meta = {
  "version": 1
};
