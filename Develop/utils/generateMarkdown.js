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
  const {title, description} = data;
  return `# ${title}

  ## ${description}


`;
}




module.exports = generateMarkdown


// module.exports = {
//   renderLicenseBadge,
//   renderLicenseLink,
//   renderLicenseSection,
//   generateMarkdown
// }