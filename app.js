const request = require('request')

const config = require('./config')

const geocodeUrl = config.geocodeUrl

request({ url : geocodeUrl,  json : true},(error,geoResponse) => {
    const lat = geoResponse.body.features[0].center[1]
    const lng = geoResponse.body.features[0].center[0]
    console.log(lat+' '+lng)
    const coordinates = lat + ',' + lng

    const apiCoordinates = (coordinates != "") ? coordinates : config.coordinates

    const url = config.baseUrl+config.secretKey+'/'+apiCoordinates

    request({url : url , json : true } , (error,response) => {
        console.log(response.body.currently)
    })
})