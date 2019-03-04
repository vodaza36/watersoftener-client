const client = require('./service')

// returns the water consumption of the last 14-days
const history = client.getWaterConsumptionHistory()
  .then(result => console.log('History: ', result))

// returns yesterdays water consumption
const yesterday = client.getWaterConsumptionYesterday()
  .then(result => console.log('Yesterday: ', result))
