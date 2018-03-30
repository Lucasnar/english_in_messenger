module.exports = {
  "define": {
    "underscored": true,
    "timestamps": true,
    "createdAt": "created_at",
    "updatedAt": "updated_at",
    "deletedAt": "deleted_at",
  },
  "development": {
    "username": process.env.PGUSER,
    "password": process.env.PGPASSWORD,
    "database": process.env.PGDATABASE,
    "hostname": process.env.PGHOST,
    "dialect": "postgres",
  }
}
