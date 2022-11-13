const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

// const url = 'http://api.weatherstack.com/current?access_key=b699effe3fcfc17307a076c48233403c&query=37.8267,-122.4233&units=f' //
// //access_key-my access key, query - coordinates of location, units - to convert units to fahrenheit
// request({ url : url, json : true}, (error,response) => {

//     if(error){
//         console.log('Unable to connect to weather service.')
//     }
//     else if(response.body.error){
//         console.log('Unable to find location')
//     }
//     else{
//         console.log(response.body.current.weather_descriptions[0] + '. The temperature is ' + response.body.current.temperature +' degrees currently. It feels like '+ response.body.current.feelslike + ' outside')
//     }
//     // const data = JSON.parse(response.body)
//     // console.log(data.current)
    
// })



//GEOCODING
//Latitudes -> Coordinates -> Weather

// const geocodeurl = 'https://us1.locationiq.com/v1/search?key=pk.84bdfe7ee5311a118c26a4dacab7107f&q=Irvine&format=json'
// //using Location IQ

// request({url : geocodeurl , json : true}, (error,response) => {
    
//     if(error){
//         console.log('Unable to connect to location services')
//     }
//     else if(response.body.error){
//         console.log('Unable to find Location. Try another search.')
//     }
//     else{
//         const latitude = response.body[0].lat
//         const longitude = response.body[0].lon
//         console.log('Latitude is = ' + latitude + 'Longitude is = ' + longitude)
//     }


    
// })

const address = process.argv[2]

if(!address){
  console.log('Please provide an address!')
}else{
  geocode(address, (error,data) => {
    if(error){
      return console.log(error)
    }

    forecast(data.latitude, data.longitude, (error, foreCastdata) => {
      if(error){
        return console.log(error)
      }

      console.log(data.location)
      console.log(foreCastdata)
    })
})
}

console.log(process.argv)


// Asynchronous Node_jS
// console.log('Starting')

// setTimeout(()=>{
//     console.log('2 second timer')
// },2000)

// setTimeout(()=> {
//     console.log('0 second timer')
// },0)

// console.log('Stopping')