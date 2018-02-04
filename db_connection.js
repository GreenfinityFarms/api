const env              = require('env2')('./env.json')
const { Pool, Client } = require('pg')
const {
  PGHOST,
  PGPORT,
  PGUSER,
  PGPASSWORD,
  PGDATABASE,
} = process.env

module.exports = new Pool()
