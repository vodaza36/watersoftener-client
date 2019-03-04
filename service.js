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

const getActDate = (daysOffset) => {
  const actDate = new Date()
  const newDate = new Date(actDate)
  newDate.setDate(newDate.getDate() - daysOffset)

  var dd = newDate.getDate()
  var mm = newDate.getMonth() + 1
  var y = newDate.getFullYear()

  return mm + '/' + dd + '/' + y
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
          for (const p of extractParams) {
            history.push({
              'date': getActDate(i++),
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
