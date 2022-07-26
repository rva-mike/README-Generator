// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions =  [
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
        message: "Please provide a brief description of your project. (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the installation process if any.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['MIT', 'GPL v3', 'Apache 2.0', 'no license']
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
        name: 'email',
        message: 'Please provide your email address for any questions.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide your GitHub username to link to your GitHub profile for any questions.',
    },

];

// TODO: Create a function to initialize app
const promptUser = () => {
    return inquirer.prompt(questions)
}

// Function call to initialize app
promptUser()
.then(readmeAnswers => {
    console.log(readmeAnswers)
    const markdown = generateMarkdown(readmeAnswers)
    writeToFile(markdown)
})


// TODO: Create a function to write README file
function writeToFile(markdown) {
//use fs to write to a file 
fs.writeFile('README.md', markdown, err => {
    if (err) {
      console.error(err);
    }
    console.log("file written successfully")
  });
}




