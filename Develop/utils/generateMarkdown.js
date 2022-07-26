// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
      const mitLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      return mitLicense
  } else if (license === "GPL v3") {
      const gplLicense = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      return gplLicense
  } else if (license === "Apache 2.0") {
    const apacheLicense = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    return apacheLicense
  }else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return 'https://opensource.org/licenses/MIT'
  }else if (license === 'GPL v3'){
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }else if (license === 'Apache 2.0'){
    return 'https://opensource.org/licenses/Apache-2.0'
  } else {
    return ''
  }
}


// TODO: Create a function to generate markdown for README
// data = readME answers
function generateMarkdown(data) {
  const { title, description, installation, usage, license, contributing, tests, email, github } = data;

  return `
  ${renderLicenseBadge(license)}

  # ${title}

  ## Description
  ${description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  ${license}

  ${renderLicenseLink(license)}

  ## Contributing
  ${contributing}

  ## Tests
  ${tests}

  ## Questions
  Please send me an email or visit my GitHub profile if you need to reach me for additional questions.

  Email: ${email}

  GitHub Profile: https://github.com/${github}

`;
}


module.exports = generateMarkdown
