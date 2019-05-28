const request = require('request')

const url = 'https://api.darksky.net/forecast/8ba53b38cc3194a7746c341bd7554374/37.8267,-122.4233'

request({url : url} , (error,response) => {
    console.log(response)
})