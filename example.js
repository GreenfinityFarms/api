const { Pool, Client } = require('pg')
const env = require('env2')('./env.json')
const {
  PGHOST,
  PGPORT,
  PGUSER,
  PGPASSWORD,
  PGDATABASE,
} = process.env

// 'pg' will use the environent variables from process.env by default
const pool = new Pool()

const selectAllFromConditions = pool.query('SELECT * FROM conditions', (err, res) => {
  console.log(err, res)
  pool.end()
})
