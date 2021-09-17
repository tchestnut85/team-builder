const internQuestions = [
	{
		type: 'input',
		name: 'name',
		message: 'What is the name of the intern? \n',
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
		message: "What is the intern's ID number? \n",
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
		message: "What is the intern's email address? \n",
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
		name: 'schoolName',
		message: "\n What is the name of the intern's school?",
		validate: function (value) {
			if (value) {
				return true;
			} else {
				console.log("Please provide the name of the intern's school.");
			}
		},
	},
];

module.exports = { internQuestions };
