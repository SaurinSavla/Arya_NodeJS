const chalk = require('chalk') // helps coloring text
const yargs = require('yargs') //helps taking input
const getNotes = require('./notes.js')
//we install many packages because node js doesnt allow too many argument parsing

//Customizing yargs
yargs.version('1.1.0')

//Creating add command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    handler : function(){
        console.log('Adding a new note')
    }
})

//Creating Remove command
yargs.command({
    command : 'remove',
    describe :'Removing a Note',
    handler : function(){
        console.log('Removing a note')
    }
})

//Creating Remove command
yargs.command({
    command : 'list',
    describe :'Listing all Note',
    handler : function(){
        console.log('Listing all note')
    }
})

//Creating Remove command
yargs.command({
    command : 'read',
    describe :'Reading a Note',
    handler : function(){
        console.log('Reading all notes')
    }
})
console.log(yargs.argv)
// if(command === 'add')
// {
//     console.log('Adding Note')
// }

// else if(command === 'remove')
// {
//     console.log('Remove Note')
// }

// const validator = require('validator')
// const { default: isEmail } = require('validator/lib/isemail.js')

// const msg = getNotes()
// console.log(msg)
// const greenMSG = chalk.red.inverse.bold('Success!')
// console.log(greenMSG)

// console.log(process.argv[2])
// console.log(validator.isURL ('saurin'))


//const fs = require('fs')
//fs.writeFileSync('notes.txt','My name is Saurin')   // creates or overwrites an existing file with the text
//fs.appendFileSync('notes.txt','I live in Mumbai')    //append text to file


// const fna = require('./utils.js')
// const sum = fna(4,5)
// console.log(sum)