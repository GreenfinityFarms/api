const pool = require('../db_connection')

/*

  To insert a record, the following fields are required:

  { owner } :: points to an ID in the "gf"."sensors" table
  { value } :: value to be added

  A current time stamp will be provided, synced to local time on the server.

  Here's an example request using curl:

    curl -d "owner=1&value=82" localhost:3000/create_record

  Or simply send a URL-encoded PUT request, for instance:

    localhost:3000/create_record?owner=1&value=80

*/



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
