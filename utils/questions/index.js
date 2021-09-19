const { managerQuestions } = require('./manager');
const { engineerQuestions } = require('./engineer');
const { internQuestions } = require('./intern');
const {
	addIntern,
	addEngineer,
	addManager,
	addEmployee,
} = require('./promptQuestions');
const { addEmployeeQuestion } = require('./newEmployee');

module.exports = {
	addEmployeeQuestion,
	managerQuestions,
	engineerQuestions,
	internQuestions,
	addIntern,
	addEngineer,
	addManager,
	addEmployee,
};
