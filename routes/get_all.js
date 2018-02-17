const pool = require('../db_connection')

module.exports = {
  method: 'GET',
  path: '/get_all_records',
  handler: async function (request, h) {
    try {
      const res = await pool.query('SELECT * FROM gf.records;')
      return res.rows.map(row => JSON.stringify(row)).join('\n')
    } catch(err) {
      console.log(err)
    }
  }
}
