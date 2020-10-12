  # Team Builder
  ![License](https://img.shields.io/badge/License%3A-MIT-green.svg)

  ## Description
  Team Builder is a team profile generator that you can quickly create an HTML file with cards for each of your employees which include their emails and GitHub profiles.
  After going through the series of questions for your employees, an HTML file will be generated in the dist folder as well as an assets folder containing a CSS file.
  
  This app was created using object-oriented programmiing (OOP) and test-driven development (TDD). 
  Node.js was used with Inquirer.js to prompt questions in the command line and Jest was also used to for test-driven development.

  #### Team Builder questions and answers example:
  ![Questions and Answers](./assets/images/screenshot-1.JPG)

  #### HTML Webpage generated from answers:
  ![HTML Example](./assets/images/screenshot-2.JPG)

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Language and Tech Used](#languages and tech used)
  - [Questions](#questions)
  - [Links](#links)
  - [License](#license) 

  ## Installation
  - Make sure Node.js is installed on your computer. 
  - Clone or download the repository from GitHub. 
  - You may need to install the required modules by running `npm install` in the terminal.
  
  ## Usage
  This app can be used to quickly create a team profile webpage for easy access to your team's important info, email and GitHub profiles. After completing the series of questions, you will have a new HTML file that you can open in your web browser.

  * In the terminal, navigate to Team Builder's directory and run `node index` to invoke the app.
  * You will be prompted with a series of questions about the manager and additional employees.
  * The question types used include text input, yes/no questions and a list. Type in text input answers, use the up/down arrows for the list then enter to select the answer, and y/n then enter for the yes/no questions.
  * Once all the questions have been answered, your answers will print to the terminal and a confirmation will also appear in the terminal that your HTML file has been generated. 
  * A new HTML file named index.html will be created in the /dist directory along with a style.css file in the /assets/style directory. 
  * Open the index.html in your web browser to view the generated webpage.
  * If moving the index.html and the style.css files to another directory, make sure to move both the index.html and /assets directory because the CSS file in there is needed for the index.html file.

  ## Languages and Tech Used
  - JavaScript
  - Node.js
  - [Inquirer](https://www.npmjs.com/package/inquirer)
  - [Jest](https://jestjs.io/docs/en/getting-started)
  - [Bulma](https://bulma.io/)
  - [Font Awesome](https://fontawesome.com/start)
  
  ## Questions
  Please visit my **[GitHub profile](https://github.com/tchestnut85/)** to check out this and other projects I've created and contributed to.
  If you have any specific questions about this project, please contact me at <tchestnut85@gmail.com>.

  ## Links
  - **[GitHub Repo](https://github.com/tchestnut85/team-builder/)**
  - **[Video walkthrough](https://drive.google.com/file/d/17Rn8EwEGaD9NddtqaF6pLBL1d8c4isjb/view?usp=sharing)**
  - **[Sample generated HTML file](https://github.com/tchestnut85/team-builder/blob/main/assets/demo/index.html)**

  ## License
  ![License](https://img.shields.io/badge/License%3A-MIT-green.svg)
  
  This app is licensed under the MIT license.
