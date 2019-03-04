const service = require('./service')

service.getWaterConsumptionHistory()
  .then((result) => console.log('Result: ', result))
  .catch(err => console.error('ERROR: ', err))
