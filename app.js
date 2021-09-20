const fs = require('fs');
const inquirer = require('inquirer');
const createHtmlDocument = require('./utils/generateHtml');
const {
	addManager,
	addEmployeeQuestion,
	addEngineer,
	addIntern,
} = require('./utils/questions');
const {
	managerQuestions,
	engineerQuestions,
	internQuestions,
} = require('./utils/questions');
const { COMPLETE, FILE_PATH } = require('./utils/constants');

// Array to hold all team members and feed into HTML generator
const employees = [];
const team = [];

function startQuestions() {
	addManager(employees, managerQuestions, team);
}

async function addEmployee() {
	console.log('addEmployeeQuestion:', addEmployeeQuestion);
	const { newEmployee } = await inquirer.prompt(addEmployeeQuestion);

	switch (newEmployee) {
		case EMPLOYEE_ROLES.ENGINEER:
			addEngineer(employees, engineerQuestions);
			break;
		case EMPLOYEE_ROLES.INTERN:
			addIntern(employees, internQuestions);
			break;
		case COMPLETE.COMPLETE_TEAM:
			makeProfile();
			break;
	}
}

function makeProfile(employees, team) {
	fs.writeFile(FILE_PATH, createHtmlDocument(employees, team[0]), err => {
		if (err) {
			console.log('Error: ' + err);
			throw Error(err);
		} else {
			console.log(COMPLETE.COMPLETE_LOG);
		}
	});
}

// Start the app
startQuestions();

module.exports = addEmployee;
