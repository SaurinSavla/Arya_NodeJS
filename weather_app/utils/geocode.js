const request = require('request')


const geocode = (address,callback) => {
    const url = 'https://us1.locationiq.com/v1/search?key=pk.84bdfe7ee5311a118c26a4dacab7107f&q=' + encodeURIComponent(address) + '&format=json'
    request({url : url, json : true}, (error,response) => {
        if(error){
            callback('Unable to Connect to location services',undefined)
        }else if(response.body.error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined, {
                latitude : response.body[0].lat,
                longitude : response.body[0].lon,
                location : response.body[0].display_name
            })
        }
    })
}

module.exports = geocode