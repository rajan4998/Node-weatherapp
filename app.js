const request = require('request')

const geoCode = require('./utils/geocode')
const weatherForecast = require('./utils/weatherforecast')

//function geoCode calling
geoCode('India', (error, response) => {
    console.log('Error : '+error)
    console.log(response)
})

let apiCoordinates = '28.702850,77.428749'

weatherForecast(apiCoordinates,(error,response)=>{
    console.log('Error : '+error)
    console.log(response)
})