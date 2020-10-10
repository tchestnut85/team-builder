const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const createTeam = () => {
    new Employee().getName();
};


const generateHtml = () => {
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Builder</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            
        </main>
    </body>
    </html>
    `;
};

const newEmployee = () => {
    inquirer
        .prompt({
            type: 'confirm',
            name: 'addEmployee',
            message: 'Do you want to add another employee?',
            validate: addInput => {
                if (addInput) {
                    getName();
                } else {
                    generateHtml();
                }
            }
        });
};

createTeam();

module.exports = Index;