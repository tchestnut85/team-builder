const engineerQuestions = [
	{
		type: 'input',
		name: 'name',
		message: 'What is the name of the engineer? \n',
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
		message: "What is the engineer's ID number? \n",
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
		message: "What is the engineer's email address? \n",
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
		name: 'github',
		message: "\n What is the engineer's GitHub username?",
		validate: function (value) {
			if (value) {
				return true;
			} else {
				console.log(
					'Please provide the GitHub username for this employee.'
				);
			}
		},
	},
];

module.exports = { engineerQuestions };
