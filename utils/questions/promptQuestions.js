const { Manager, Engineer, Intern } = require('../../lib');
const inquirer = require('inquirer');
const addEmployee = require('../../app');

// Initial manager questions function
async function addManager(employeesArr, questions, teamArr) {
	const { name, id, email, officeNumber, teamName } = await inquirer.prompt(
		questions
	);
	const manager = new Manager(name, id, email, officeNumber, teamName);
	employeesArr.push(manager);
	teamArr.push(teamName);
	console.log('addEmployee:', addEmployee);
	addEmployee();
}

// Engineer questions function
async function addEngineer(employees, questions) {
	const { name, id, email, github } = await inquirer.prompt(questions);
	const engineer = new Engineer(name, id, email, github);
	employees.push(engineer);
	addEmployee();
}

// Intern questions function
async function addIntern(employees, questions) {
	const { name, id, email, schoolName } = await inquirer.prompt(questions);
	const intern = new Intern(name, id, email, schoolName);
	employees.push(intern);
	addEmployee();
}

module.exports = { addManager, addIntern, addEngineer };
