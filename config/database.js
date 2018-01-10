module.exports = {
  "development": {
    "username": process.env.PGUSER,
    "password": process.env.PGPASSWORD,
    "database": process.env.PGDATABASE,
    "hostname": process.env.PGHOST,
    "dialect": "postgres"
  }
}
