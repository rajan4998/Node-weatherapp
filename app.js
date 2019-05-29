const request = require('request')

const config = require('./config')

const geocodeUrl = config.geocodeUrl

request({ url : geocodeUrl,  json : true},(error,geoResponse) => {

    if(error){
        console.log('Unable to connect to weather service')
    }else{
        if (geoResponse.body.features.length > 0){
            const lat = geoResponse.body.features[0].center[1]
            const lng = geoResponse.body.features[0].center[0]
            const coordinates = lat + ',' + lng
            let apiCoordinates = (coordinates != "") ? coordinates : config.coordinates
            // apiCoordinates = "25.9999" //invalid coordinates
            // apiCoordinates = "225.9999,225.9999"
            const url = config.baseUrl+config.secretKey+'/'+apiCoordinates
        
            request({url : url , json : true } , (weatherError,response) => {
                if (weatherError){
                    console.log('Unable to connect to geocoding service')
                } else if (response.body.error) {
                    console.log('Unable to find location')
                } else if (response.body.currently!=null){
                    const forecast = response.body.currently
                    console.log(forecast.summary + '. It is currently ' + forecast.temperature + ' degree.There is ' + forecast.precipProbability+' chance of raining today.')
                }
                else{
                    console.log("Config not set")
                }
            })
        }else{
            console.log("Coordinates not found for the location.")
        }
    }


})