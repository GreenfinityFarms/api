const { Pool, Client } = require('pg')
const env = require('env2')('./env.json')
const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASS,
} = process.env
