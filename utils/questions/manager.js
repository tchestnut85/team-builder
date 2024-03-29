const managerQuestions = [
	{
		type: 'input',
		name: 'teamName',
		message: 'What is the name of your team?',
		validate: teamInput => {
			if (teamInput) {
				return true;
			} else {
				console.log('You must enter a team name.');
			}
		},
	},
	{
		type: 'input',
		name: 'name',
		message: 'What is the name of the team manager? \n',
		validate: nameInput => {
			if (nameInput) {
				return true;
			} else {
				console.log('You must enter a name.');
				return false;
			}
		},
	},
	{
		type: 'number',
		name: 'id',
		message: "What is the manager's ID number? \n",
		validate: idInput => {
			if (idInput) {
				return true;
			} else {
				console.log('You must enter a 4-digit ID number.');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'email',
		message: "What is the manager's email address? \n",
		validate: emailInput => {
			if (emailInput.includes('@') && emailInput.includes('.com')) {
				return true;
			} else {
				console.log('\n You must enter a valid email address.');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'officeNumber',
		message: "\n What is the manager's office number?",
		validate: officeNumber => {
			if (officeNumber) {
				return true;
			} else {
				console.log('You must enter a number.');
				return false;
			}
		},
	},
];

module.exports = { managerQuestions };
