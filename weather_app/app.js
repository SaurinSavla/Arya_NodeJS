const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=b699effe3fcfc17307a076c48233403c&query=37.8267,-122.4233'

request({ url : url}, (error,response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})




// Asynchronous Node_jS
// console.log('Starting')

// setTimeout(()=>{
//     console.log('2 second timer')
// },2000)

// setTimeout(()=> {
//     console.log('0 second timer')
// },0)

// console.log('Stopping')