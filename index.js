const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createDocument = require('./utils/generateHtml');
const {
	addEmployeeQuestion,
	managerQuestions,
	engineerQuestions,
	internQuestions,
} = require('./utils/questions');

// Array to hold all team members and feed into HTML generator
const employees = [];
const team = [];

function startQuestions() {
	addManager();
}

// Initial manager questions function
const addManager = async () => {
	const { name, id, email, officeNumber, teamName } = await inquirer.prompt(
		managerQuestions
	);
	const manager = new Manager(name, id, email, officeNumber, teamName);
	employees.push(manager);
	team.push(teamName);
	addEmployee();
};

// Engineer questions function
const addEngineer = async () => {
	const { name, id, email, github } = await inquirer.prompt(
		engineerQuestions
	);
	const engineer = new Engineer(name, id, email, github);
	employees.push(engineer);
	addEmployee();
};

// Intern questions function
const addIntern = async () => {
	const { name, id, email, schoolName } = await inquirer.prompt(
		internQuestions
	);
	const intern = new Intern(name, id, email, schoolName);
	employees.push(intern);
	addEmployee();
};

const makeProfile = () => {
	fs.writeFile(
		'./dist/index.html',
		createDocument(employees, team[0]),
		err => {
			if (err) {
				console.log('Error: ' + err);
				throw Error(err);
			} else {
				console.log(
					'\n =============== Team Profile created in: /dist/index.html! ==============='
				);
			}
		}
	);
};

const addEmployee = async () => {
	const { newEmployee } = await inquirer.prompt(addEmployeeQuestion);

	switch (newEmployee) {
		case 'Engineer':
			addEngineer();
			break;
		case 'Intern':
			addIntern();
			break;
		case 'Complete Team Profile':
			makeProfile();
			break;
	}
};

// Start the app
startQuestions();
