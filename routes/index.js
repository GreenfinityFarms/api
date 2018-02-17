const GET_ALL           = require('./get_all')
const HELLO_WORLD       = require('./hello_world')
const INSERT_RECORD     = require('./insert_condition')
const GET_RECORD_BY_ID  = require('./get_sensor_by_id')
const REGISTER_SENSOR   = require('./register_sensor')

module.exports = [
  GET_ALL,
  HELLO_WORLD,
  INSERT_RECORD,
  GET_RECORD_BY_ID,
  REGISTER_SENSOR
]
