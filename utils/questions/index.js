const { managerQuestions } = require('./manager');
const { engineerQuestions } = require('./engineer');
const { internQuestions } = require('./intern');
const addEmployeeQuestion = {
	type: 'list',
	name: 'newEmployee',
	message: 'Do you want to add another Employee?',
	choices: ['Engineer', 'Intern', 'Complete Team Profile'],
};

module.exports = {
	addEmployeeQuestion,
	managerQuestions,
	engineerQuestions,
	internQuestions,
};
