const fs = require('fs');
const createHtmlDocument = require('../../utils/generateHtml');
const {
	COMPLETE,
	FILE_PATH,
	EMPLOYEE_ROLES,
} = require('../../utils/constants');
const { Manager, Engineer, Intern } = require('../../lib');
const inquirer = require('inquirer');
const {
	addEmployeeQuestion,
	engineerQuestions,
	internQuestions,
} = require('../../utils/questions');

// Initial manager questions function
async function addManager(employeesArr, questions, teamArr) {
	const { name, id, email, officeNumber, teamName } = await inquirer.prompt(
		questions
	);
	const manager = new Manager(name, id, email, officeNumber, teamName);
	employeesArr.push(manager);
	teamArr.push(teamName);
	await addEmployee(employeesArr, teamArr);
}

// Engineer questions function
async function addEngineer(employees, questions, teamArr) {
	const { name, id, email, github } = await inquirer.prompt(questions);
	const engineer = new Engineer(name, id, email, github);
	employees.push(engineer);
	await addEmployee(employees, teamArr);
}

// Intern questions function
async function addIntern(employees, questions, teamArr) {
	const { name, id, email, schoolName } = await inquirer.prompt(questions);
	const intern = new Intern(name, id, email, schoolName);
	employees.push(intern);
	await addEmployee(employees, teamArr);
}

async function addEmployee(employees, team) {
	const { newEmployee } = await inquirer.prompt(addEmployeeQuestion);
	switch (newEmployee) {
		case EMPLOYEE_ROLES.ENGINEER:
			addEngineer(employees, engineerQuestions, team);
			break;
		case EMPLOYEE_ROLES.INTERN:
			addIntern(employees, internQuestions, team);
			break;
		case COMPLETE.COMPLETE_TEAM:
			makeProfile(employees, team);
			break;
	}
}

function makeProfile(employees) {
	// Get the team name from the manager's data.
	const teamName = employees[0].teamName;

	fs.writeFile(FILE_PATH, createHtmlDocument(employees, teamName), err => {
		if (err) {
			console.log('Error: ' + err);
			throw Error(err);
		} else {
			console.log(COMPLETE.COMPLETE_LOG);
		}
	});
}

module.exports = { addManager, addIntern, addEngineer };
