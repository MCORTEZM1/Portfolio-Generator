const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// // SYNTAX: fs.writeFile(file created, data being written, error callback)
// fs.writeFile('index.html', pageHTML, err => {
//     if (err) throw err; 
//     // throw ends function and passes to the next catch. If no catch, then program terminates

//     console.log('Portfolio complete! Check out index.html to see the output!')
// });


inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));

