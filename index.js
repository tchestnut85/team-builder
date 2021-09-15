const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./utils/generateHtml');
const {
	managerQuestions,
	engineerQuestions,
	internQuestions,
} = require('./utils/questions');
console.log('managerQuestions:', managerQuestions);

// Array to hold all team members and feed into HTML generator
const employees = [];

function startQuestions() {
	console.log('test');
	addManager();
}

// Initial manager questions function
const addManager = () => {
	console.log('test');
	return inquirer.prompt(managerQuestions).then(answers => {
		const manager = new Manager(
			answers.name,
			answers.id,
			answers.email,
			answers.officeNumber
		);
		employees.push(manager);
		addEmployee();
	});
};

// Engineer questions function
const addEngineer = () => {
	return inquirer.prompt(engineerQuestions).then(answers => {
		const engineer = new Engineer(
			answers.name,
			answers.id,
			answers.email,
			answers.github
		);
		employees.push(engineer);
		addEmployee();
	});
};

// Intern questions function
const addIntern = () => {
	return inquirer.prompt(internQuestions).then(answers => {
		const intern = new Intern(
			answers.name,
			answers.id,
			answers.email,
			answers.schoolName
		);
		employees.push(intern);
		addEmployee();
	});
};

const makeProfile = fileName => {
	fileName = fs.writeFile(
		'./dist/index.html',
		generateHtml(employees),
		err => {
			if (err) {
				console.log('Error: ' + err);
			} else {
				console.log(
					'\n =============== Team Profile created in: /dist/index.html! ==============='
				);
			}
		}
	);
};

const addEmployee = () => {
	return inquirer
		.prompt({
			type: 'list',
			name: 'newEmployee',
			message: 'Do you want to add another Employee?',
			choices: ['Engineer', 'Intern', 'Complete Team Profile'],
		})
		.then(answers => {
			switch (answers.newEmployee) {
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
		});
};

// Start the app
startQuestions();
