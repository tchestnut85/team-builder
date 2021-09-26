const {
	createEngineerCard,
	createManagerCard,
	createInternCard,
} = require('./creators');
const mapEmployee = require('./mapEmployees');
const { EMPLOYEE_ROLES } = require('./constants');

// generate the employee cards
function generateHtml(employees) {
	const roles = [
		{
			role: EMPLOYEE_ROLES.MANAGER,
			creator: createManagerCard,
		},
		{
			role: EMPLOYEE_ROLES.ENGINEER,
			creator: createEngineerCard,
		},
		{ role: EMPLOYEE_ROLES.INTERN, creator: createInternCard },
	];

	// for each proprety/value in roles object, run the mapEmployee function with arguments
	const teamCards = roles
		.map(role => mapEmployee(employees, role.role, role.creator))
		.join('');

	return teamCards;
}

// generate the html document
function createHtmlDocument(employees, teamName = 'My Team') {
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${teamName} Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" integrity="sha512-UJfAaOlIRtdR+0P6C3KUoTDAxVTuy3lnSXLyLKlHYJlcSU8Juge/mjeaxDNMlw9LgeIotgz5FP8eUQPhX1q10A==" crossorigin="anonymous" />        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="./assets/css/style.css">
    </head>
    <body>
        <header class='cyan lighten-1'>
            <div class='cyan lighten-1'>
                <h1 class='center-align'>${teamName} Team</h1>
            </div>
        </header>
        <main>
            <section class='cards-section'>
                ${generateHtml(employees)}
            </section>
        </main>
    </body>
    </html>
    `;
}

module.exports = createHtmlDocument;
