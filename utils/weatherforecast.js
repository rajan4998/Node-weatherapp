const request = require('request')
const config = require('../config')

const weatherForecast = (coordinates, callback) => {

    const url = config.baseUrl + config.secretKey + '/' + coordinates

    request({ url: url, json: true }, (weatherError, response) => {
        if (weatherError) {
            callback('Unable to connect to geocoding service',undefined)
        } else if (response.body.error) {
            callback('Unable to find location',undefined)
        } else if (response.body.currently != null) {
            const forecast = response.body.currently
            callback(undefined,forecast.summary + '. It is currently ' + forecast.temperature + ' degree.There is ' + forecast.precipProbability + ' chance of raining today.')
        }
        else {
            callback("Config not set")
        }
    })
}

module.exports = weatherForecast