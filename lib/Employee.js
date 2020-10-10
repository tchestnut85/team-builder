// const Manager = require('./Manager');
// const Engineer = require('./Engineer');
// const Intern = require('./Intern');
const Index = require('../index');
const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
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
    }

    getId() {
        inquirer
            .prompt({
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

    getEmail() {
        inquirer
            .prompt({
                type: 'input',
                name: 'email',
                message: "What is the employee's email address?",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('You must enter a valid e-mail address.');
                        return false;
                    }
                }
            })
            .then(({ email }) => {
                this.email = email;
            });
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;