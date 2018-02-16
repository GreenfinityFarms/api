const pool = require('../db_connection')

const deconstructKeys = payload => Object.keys(payload).join(', ')
const deconstructValues = payload => Object.values(payload).join(', ')

module.exports = {
  method: 'POST',
  path: '/create_record',
  handler: async function (request, h) {
    const { payload: p } = request
    try {
      const res = await pool.query(
        'INSERT INTO gf.records '
        + `(time, ${deconstructKeys(p)}) `
        + `VALUES (NOW(), ${deconstructValues(p)});`
      )

      return res;
    } catch(err) {
      console.log(err)
    }
  }
}
