//default packages
const request = require('request')
const yargs = require('yargs')

yargs.version('1.1.1');

//user defined packages
const geoCode = require('./utils/geocode')
const weatherForecast = require('./utils/weatherforecast')

//coordinates defined
let apiCoordinates = '28.702850,77.428749'

yargs.command({
    command : 'forecast',
    describe : 'Get weather forecast of a city/area',
    builder : {
        place : {
            describe : 'This is required to get forecast against',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){

        //function geoCode calling
        geoCode(argv.place, (error, response) => {
            console.log('Error : ' + error)
            console.log(response)

            //function weatherforecast calling
            weatherForecast(response.longitude, response.latitude, (error, response) => {
                console.log('Error : ' + error)
                console.log(response)
            })
        })
    }
})

yargs.parse()