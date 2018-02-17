const pool = require('../db_connection')

/*
  example query: <url>/get_record_by_id?id=1
*/

module.exports = {
  method: 'GET',
  path: '/get_record_by_id',
  handler: async function (request, h) {
    const { id } = request.query
    try {
      let res = await pool.query(`SELECT * FROM gf.records WHERE (owner = ${id});`)

      return res.rows
    }

    catch(err) {
      console.log(err)
    }
  }
}
