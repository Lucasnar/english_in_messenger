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
  return db.createTable("twitter_accounts", {
    id: { type: "int", primaryKey: true, autoIncrement: true },
    name: "string",
    twitterid: { type: "int", notNull: true }
  });
};

exports.down = function(db) {
  return db.dropTable("twitter_accounts");
};

exports._meta = {
  "version": 1
};
