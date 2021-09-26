const { addManager } = require('./utils/questions/promptQuestions');
const { managerQuestions } = require('./utils/questions');

// Array to hold all team members and feed into HTML generator
const employees = [];
const team = [];

function startQuestions() {
	addManager(employees, managerQuestions, team);
}

// Start the app
startQuestions();
