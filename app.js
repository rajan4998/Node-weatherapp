const request = require('request')

const config = require('./config')



const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Meerut.json?access_token=pk.eyJ1IjoicmFqYW40OTk4IiwiYSI6ImNpaGtha3RyYTBub3B2YmtsY3JieTljbXIifQ.AXJswCu_nMlcg4hSmBkABg&limit=1'

request({ url : geocodeUrl,  json : true},(error,geoResponse) => {
    const lat = geoResponse.body.features[0].center[1]
    const lng = geoResponse.body.features[0].center[0]
    console.log(lat+' '+lng)
    const coordinates = lat + ',' + lng

    const apiCoordinates = (coordinates != "") ? coordinates : config.coordinates

    const url = config.baseUrl+config.secretKey+'/'+apiCoordinates

    request({url : url , json : true } , (error,response) => {
        // w/o json : true in options array
        // const formattedResponse = JSON.parse(response.body)
        // console.log(formattedResponse.currently)
    
        // w/ json : true in options array
        console.log(response.body.currently)
    })
})