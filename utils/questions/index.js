const { managerQuestions } = require('./manager');
const { engineerQuestions } = require('./engineer');
const { internQuestions } = require('./intern');
const addEmployeeQuestion = require('./newEmployee');

module.exports = {
	addEmployeeQuestion,
	managerQuestions,
	engineerQuestions,
	internQuestions,
};
