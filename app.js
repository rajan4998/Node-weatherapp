//default packages
const request = require('request')

//user defined packages
const geoCode = require('./utils/geocode')
const weatherForecast = require('./utils/weatherforecast')

//coordinates defined
let apiCoordinates = '28.702850,77.428749'

if(!process.argv){
    return console.log('No inputs provided')
}

//function geoCode calling
geoCode(process.argv[2], (error, { latitude, longitude, location}) => {
    console.log('Geocode Error : ' + error)
    // console.log(response)

    //function weatherforecast calling
    weatherForecast(longitude, latitude, location, (error, response) => {
        console.log('Error : ' + error)
        console.log(response)
    })
})
