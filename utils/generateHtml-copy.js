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
const generateHtml = (employees) => {
    console.log('employees:', employees);

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
            <div class='cyan lighten-1'>
                <h1 class='center-align'>My Team</h1>
            </div>
        </header>
        <main>

            <section class='row'>
                <div class="col s4">
                    <div class="card ">
                        <div class="card content teal lighten-5">
                            <h2 class="card-title">${employees[0].getName()}</h2>
                            <span><span class="icon"><i class="fas fa-briefcase"></i></span>${employees[0].getRole()}</span>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <span>ID:${employees[0].getId()}</span>
                            </div>
                            <div class="card-content">
                                <span>Email:<a href='mailto:${employees[0].getEmail()}'> ${employees[0].getEmail()}</a></span>
                            </div>
                            <div class="card-content">
                                <span>Office Number: ${employees[0].officeNumber}</span>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="col s4">
                    <div class="card cyan lighten-3">
                        <div class="card content teal lighten-5">
                            <h2 class="card-title">${employees[1].getName()}</h2>
                            <span><span class="icon"><i class="fas fa-laptop-code"></i></span>${employees[1].getRole()}</span>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <span>ID:${employees[1].getId()}</span>
                            </div>
                            <div class="card-content">
                                <span>Email:<a href='mailto:${employees[1].getEmail()}'> ${employees[1].getEmail()}</a></span>
                            </div>
                            <div class="card-content">
                                <span>GitHub:<a href='https://github.com/${employees[1].getGithub()}' target='_blank'> ${employees[1].getGithub()}</a></span>
                            </div>
                        </div>
                    </div>
                </div>
       
                <div class="col s4">
                    <div class="card cyan lighten-3">
                        <div class="card content teal lighten-5">
                            <h2 class="card-title">${employees[2].getName()}</h2>
                            <span><span class="icon"><i class="fas fa-book"></i></span>${employees[2].getRole()}</span>
                        </div>
                        <div class="card-content">
                            <div class="content">
                                <span>ID:${employees[2].getId()}</span>
                            </div>
                            <div class="card-content">
                                <span>Email:<a href='mailto:${employees[2].getEmail()}'> ${employees[2].getEmail()}</a></span>
                            </div>
                            <div class="card-content">
                                <span>School: ${employees[2].getSchool()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    </body>
    </html>
    `;
};

module.exports = generateHtml;