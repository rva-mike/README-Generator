// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("is this working?????");
  //switch statement
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// data = readME answers
function generateMarkdown(data) {
  const {title, description, tableOfContents, installation, usage, license, contributing, tests, questions} = data;
  return `
  # ${title}

  ## Description
  ${description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  ${license}

  ## Contributing
  ${contributing}

  ## Tests
  ${tests}

  ## Questions
  ${questions}

`;
}




module.exports = generateMarkdown


// module.exports = {
//   renderLicenseBadge,
//   renderLicenseLink,
//   renderLicenseSection,
//   generateMarkdown
// }