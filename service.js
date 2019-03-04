const client = require('./client')
const { parseString } = require('xml2js')

const getResponseParams = (jsonResponse) => {
  const params = []

  for (const param in jsonResponse.data) {
    if (param !== 'code') {
      params.push(param)
    }
  }
  return params
}

const getResponseParamValue = (jsonResponse) => (parameter) => {
  return jsonResponse.data[parameter][0]
}

const getWaterConsumptionHistory = () => {
  return new Promise((resolve, reject) => {
    client.getWaterConsumptionHistory()
      .then(result => parseString(result.data, (err, res) => {
        if (err) {
          reject(err)
        } else {
          const extractParams = getResponseParams(res)
          const extractParamValue = getResponseParamValue(res)
          const history = []
          let i = 1
          const actDate = new Date()
          for (const p of extractParams) {
            i++
            history.push({
              'date': actDate.getDate() + i,
              'consumption': extractParamValue(p),
              'unit': 'litres'
            })
          }
          resolve(history)
        }
      }))
  })
}

module.exports = {
  getWaterConsumptionHistory
}
