// employees will be an array of classes

// .filter based on getRole() -> retulst in an array with JUST engineers, just managers, intern
// .map()
// anotherArray.join() - join arrays together
// anotherArray -> HTML
// Each role will need specific HTML
// (because then we'll be able to do engineer.getName, engineer.getEmail, etc.)

// Array to hold generated employee cards
const employeeCards = [];

// OLD FUNCTION
// const generateHtml = (employees) => {
//     console.log('employees:', employees);

//     // array to hold the employee card divs created
//     for (let employee of employees) {
//         const div = `<div><h2>${employee.name}</h2></div>`;
//         employeeCards.push(div);
//     }

//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>My Team</title>
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" integrity="sha512-UJfAaOlIRtdR+0P6C3KUoTDAxVTuy3lnSXLyLKlHYJlcSU8Juge/mjeaxDNMlw9LgeIotgz5FP8eUQPhX1q10A==" crossorigin="anonymous" />
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
//         <link rel="stylesheet" href="style.css">
//     </head>
//     <body>
//         <header>
//             <h1>My Team</h1>
//         </header>
//         <main>
//         ${employeeCards.join()}
//         </main>
//     </body>
//     </html>
//     `;
// };




// NEW FUNCTION
const generateHtml = (employees) => {
    console.log('employees:', employees);

    const createManager = (manager) => {
        return `
            <section>
                <div>  
                    <h2>${manager.getName()}</h2>
                    <h3>${manager.getRole()}</h3>
                </div>
                <div>
                    <span>${manager.getId()}
                    <span>${manager.getEmail()}</span>
                    <span>${manager.officeNumber}</span>
                </div>
            </section>
            `;
    };

    const createEngineer = (engineer) => {
        return `
            <section>
                <div>
                    <h2>${engineer.getName()}</h2>
                    <h3>${engineer.getRole()}</h3>
                </div>
                <div>
                    <span>${engineer.getId()}
                    <span>${engineer.getEmail()}</span>
                    <span>${engineer.getGithub()}</span>
                </div>
            </section>
            `;
    };

    const createIntern = (intern) => {
        return `
             <section class='card'>
                <div class="card-header">
                    <h2 class="card-header-title">${intern.getName()}</h2>
                    <h3><span class="icon"><i class="fas fa-graduation-cap"></i></span>${intern.getRole()}</h3>
                </div>
                <div>
                    <span>${intern.getId()}
                    <span>${intern.getEmail()}</span>
                    <span>${intern.getSchool()}</span>
                </div>
            </section>
            `;
    };

    const team = [];
    team.push(employees.filter(employee => employee.getRole() === 'Manager')).map(manager => createManager(manager)).join('');
    team.push(employees.filter(employee => employee.getRole() === 'Engineer')).map(engineer => createEngineer(engineer)).join('');
    team.push(employees.filter(employee => employee.getRole() === 'Intern')).map(intern => createIntern(intern)).join('');

    return team.join('');
};



module.exports = (employeeHtml) => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" integrity="sha512-UJfAaOlIRtdR+0P6C3KUoTDAxVTuy3lnSXLyLKlHYJlcSU8Juge/mjeaxDNMlw9LgeIotgz5FP8eUQPhX1q10A==" crossorigin="anonymous" />        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
        ${generateHtml(employeeHtml)}
        </main>
    </body>
    </html>
    `;
};

