const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

// function to begin team profile creation
function createTeam() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
            writeToFile('./dist/README.md', answers);
        });
};

const employeeInfo [{
    inquirer
        .prompt({
        type: 'input',
        name: 'name',
        message: "What is the name of the employee you are adding?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter a name.');
                return false;
            }
        }
    })
    .then(({ name }) => {
        this.name = new Employee(name);
    });
type: 'number',
    name: 'id',
        message: "What is the employee's ID number? (Must be a 4-digit number)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You must enter a 4-digit ID number.');
                    return false;
                }
            }
    })
    .then(({ id }) => {
                this.id = id;
            });
    
}
]

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