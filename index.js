const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const createTeam = () => {
    new Employee().getName();
};

createTeam();

module.exports = Index;