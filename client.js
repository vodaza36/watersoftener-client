require('dotenv').config()
const axios = require('axios')
const ip = process.env.WATERSOFTENER_IP || '127.0.0.1'
const baseURL = `http://${ip}/mux_http`

const client = axios.create({
  baseURL
})
const clientId = process.env.CLIENT_ID || 'n1'
const createBody = (body) => `id=${clientId}&${body}`

const getWaterConsumptionHistory = () => {
  const body = createBody('show=D_Y_2_1|D_Y_2_2|D_Y_2_3|D_Y_2_4|D_Y_2_5|D_Y_2_6|D_Y_2_7|D_Y_2_8|D_Y_2_9|D_Y_2_10|D_Y_2_11|D_Y_2_12|D_Y_2_13|D_Y_2_14~')
  return client.post('/', body)
}

const getWaterConsumptionYesterday = () => {
  const body = createBody('show=D_Y_2_1~')
  return client.post('/', body)
}

module.exports = {
  getWaterConsumptionHistory,
  getWaterConsumptionYesterday
}
