const { Pool, Client } = require('pg')
const env = require('env2')('./env.json')
const {
  PGHOST,
  PGPORT,
  PGUSER,
  PGPASSWORD,
  PGDATABASE,
} = process.env


console.log(`
  PGHOST: ${PGHOST}
  PGPORT: ${PGPORT}
  PGUSER: ${PGUSER}
  PGPASSWORD: ${PGPASSWORD}
  PGDATABASE: ${PGDATABASE}
`);
