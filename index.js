const service = require('./service')

if (!process.env.WATERSOFTENER_IP) {
  console.log('Environment variable WATERSOFTENER_IP not defined!')
  process.exit(-1)
}

module.exports = service
