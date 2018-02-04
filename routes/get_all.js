const pool = require('../db_connection')

module.exports = {
  method: 'GET',
  path: '/get_all_values',
  handler: async function (request, h) {
    try {
      const res = await pool.query('SELECT * FROM conditions')
      return res.rows[0]
    } catch(err) {
      console.log(err)
    }
  }
}
