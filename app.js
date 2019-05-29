const request = require('request')

const config = require('./config')

const url = config.baseUrl+config.secretKey+'/'+config.coordinates

request({url : url , json : true } , (error,response) => {
    //w/o json : true in options array
    // const formattedResponse = JSON.parse(response.body)
    // console.log(formattedResponse.currently)

    //w/ json : true in options array
    console.log(response.body.currently)
    
})