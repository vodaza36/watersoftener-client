# watersoftener-client
A NodeJS client library to communication with the Grünbeck softliQ:SC18 water softener

## Install
```
npm i watersoftener-client
```

## Usage
Client requests must be sequential, never call services in parallel, because the water softeners WebServer doesn't support this.
```
const client = require('watersoftener-client')

// returns the water consumption of the last 14-days
const history = client.getWaterConsumptionHistory()
  .then(result => console.log('History: ', result))

// returns yesterdays water consumption
const yesterday = client.getWaterConsumptionYesterday()
  .then(result => console.log('Yesterday: ', result))
 

// returns the water consumption of the last 14-days, without any date assumptions
const yesterday = client.getWaterConsumptionRaw()
  .then(result => console.log('Raw: ', result))

```

## Configuration
Following environment variables must be defined:

| ENV | Description |
| --- | ----------- |
| WATER_SOFTENER_BASE_URL | Full qualified HTTP path of your water softener API in your local LAN |
| WATER_SOFTENER_CLIENT_ID | A unique ID that identifies your client |



