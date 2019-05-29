const request = require('request')

const config = require('./config')

const geocodeUrl = config.geocodeUrl

request({ url : geocodeUrl,  json : true},(error,geoResponse) => {

    if(error){
        console.log('Unable to connect to weather service')
    }else{

        const lat = geoResponse.body.features[0].center[1]
        const lng = geoResponse.body.features[0].center[0]
        const coordinates = lat + ',' + lng
        const apiCoordinates = (coordinates != "") ? coordinates : config.coordinates
        const url = config.baseUrl+config.secretKey+'/'+apiCoordinates
    
        request({url : url , json : true } , (weatherError,response) => {
            if (weatherError){
                console.log('Unable to connect to geocoding service')
            }else{
                // console.log(response.body.currently)
                const forecast = response.body.currently
                console.log(forecast.summary + '. It is currently ' + forecast.temperature + ' degree.There is ' + forecast.precipProbability+' chance of raining today.')
            }
        })
    }


})