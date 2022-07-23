// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Provide a brief description of your project."
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "Provide a Table of Contents."
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process if any.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'If you have written tests for your application, then provide examples on how to run them here.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Provide your email address for any questions',
    },

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
