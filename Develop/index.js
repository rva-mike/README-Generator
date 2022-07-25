// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');



// {generateMarkdown, renderLicenseBadge}



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
        message: "Provide a brief description of your project."
    },
    {
        type: "confirm",
        name: "tableOfContents",
        message: "Would you like to include a Table of Contents?",
        default: false 
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
        type: 'checkbox',
        name: 'license',
        message: 'Provide any license information',
        choices: ['MIT', 'GNU GPlv3']
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
        message: 'Provide your email address and GitHub username for any questions.',
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
//use fs to wrinte to a file 
fs.writeFile('README-test.md', markdown, err => {
    if (err) {
      console.error(err);
    }
    console.log("file written successfully")
  });
}




