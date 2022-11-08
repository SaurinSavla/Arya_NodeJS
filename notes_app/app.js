const chalk = require('chalk')
const getNotes = require('./notes.js')
// const validator = require('validator')
// const { default: isEmail } = require('validator/lib/isemail.js')

const msg = getNotes()
console.log(msg)
const greenMSG = chalk.red.inverse.bold('Success!')
console.log(greenMSG)
// console.log(validator.isURL ('saurin'))


//const fs = require('fs')
//fs.writeFileSync('notes.txt','My name is Saurin')   // creates or overwrites an existing file with the text
//fs.appendFileSync('notes.txt','I live in Mumbai')    //append text to file


// const fna = require('./utils.js')
// const sum = fna(4,5)
// console.log(sum)