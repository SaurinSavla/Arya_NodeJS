const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b699effe3fcfc17307a076c48233403c&query='+ latitude +','+ longitude +'&units=f'
    request({url : url,json : true}, (error,response) => {
        if(error){
            callback('Unable to connect to weather service',undefined)
        }else if(response.body.error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined,response.body.current.weather_descriptions[0] + '. The temperature is ' + response.body.current.temperature +' degrees currently. It feels like '+ response.body.current.feelslike + ' outside')
        }
    })
}
module.exports = forecast