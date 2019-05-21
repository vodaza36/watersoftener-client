const service = require('./service')

if (!process.env.WATER_SOFTENER_BASE_URL) {
  console.log('Environment variable WATER_SOFTENER_BASE_URL not defined!')
  process.exit(-1)
}

module.exports = service
