const pool = require('../db_connection')

module.exports = {
  method: 'POST',
  path: '/register_sensor',
  handler: async function (request, h) {
    const { payload: p } = request

    try {
      console.log('TODO: Register a sensor');
    }

    catch (err) {
      console.log('Error: ', err);
    }
  }
}
