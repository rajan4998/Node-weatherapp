//default packages
const request = require('request')

//user defined packages
const geoCode = require('./utils/geocode')
const weatherForecast = require('./utils/weatherforecast')

//coordinates defined
let apiCoordinates = '28.702850,77.428749'

//function geoCode calling
geoCode('India', (error, response) => {
    console.log('Error : '+error)
    console.log(response)
})

//function weatherforecast calling
weatherForecast(apiCoordinates,(error,response)=>{
    console.log('Error : '+error)
    console.log(response)
})