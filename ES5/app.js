console.log('Starting the app.js..');

const validator = require('validator');

const chalk = require('chalk');

const yargs = require('yargs');

const notes = require('./notes.js')



/*
const fs = require('fs');
// fetch all content of fs module and store in fs
const os = require('os');


const res = notes.addNote();
console.log(res)


var user =  os.userInfo();


fs.appendFile('greetings.txt', 'Hello world', (err) => {
    if(err) {
        console.log("Error occured");
    }
});




const notes = require('./notes.js') 
fs.appendFile('greetings.txt', `\nHello ${user.username} ! You are ${notes.age}`, err => {
    if(err) {
        console.log("Error occurred");
    }
});




console.log(validator.isEmail('adarsha@gmail.com'))


console.log(chalk.blue('Hello world'));
console.log(chalk.green.bold.underline('Success'));
console.log(chalk.red.inverse('Error'))
*/





//Create add command  01
yargs.command ({
    command :'add',
    describe : 'Add a new note',

    builder : {
        title : {
            describe : 'Note title',
           demandOption : true,
           type : 'string'
        },
       
        body : {
            describe : 'Note body',
            demandOption : true,
            type : 'string'
        }
    },


    handler : function(argv) {
        notes.addNote(argv.title, argv.body); //Prints title and body provided as i/p
    }
});

 

//Create Remove Command 02
yargs.command({
    command :'remove',

    describe : 'delete a new note',
    builder : {
        title : {
            describe : 'Note title',
           demandOption : true,
           type : 'string'
        }

    },

    handler : function(argv) {
     
        notes.removeNote(argv.title)
    }
});











yargs.command( {
    command : 'list',
    describe : 'Lists the elements',
    handler : function() {
        console.log("Listing all the elements")
    }
})



yargs.command({
    command : 'read',
    describe : 'Read the command',
    handler : function () {
        console.log("Reading the command..")
    }
})


yargs.parse();

