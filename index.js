const service = require('./service')
const dotenv = require('dotenv')

dotenv.config()

service.getWaterConsumptionHistory()
  .then((result) => console.log('Result: ', result))
  .catch(err => console.error('ERROR: ', err))
