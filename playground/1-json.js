const fs = require('fs')
// const book = {
//     title: 'It Ends with Us',
//     author: 'Colleen Hoover' 
// }
// const jsonbook = JSON.stringify(book)
// console.log(jsonbook)

// fs.writeFileSync('1-json.json', jsonbook)


// const parseddata = JSON.parse(jsonbook)
// console.log(parseddata.author)

// const DataBuffer = fs.readFileSync('1-json.json')
// const DataJSON = DataBuffer.toString()
// const data = JSON.parse(DataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name='Colleen Hoover'
data.age='54'

const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json',userJSON)
