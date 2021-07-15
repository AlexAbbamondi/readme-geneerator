// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if(license === "MIT") {

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}

  # Description
  ${data.description}

  # Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  # Installation
  The following dependencies must be installed: ${data.installation}

  # Usage
  To use this app you must: ${data.usage}

  # Contributing
  ​In order to contribute you must: ${data.contribution}

  # Tests
  You must run the following to test the application: ${data.test}

  # License
  This application is licensed under ${data.license}.

  # Questions
  If you have any questions or issues contact ${data.github} at ${data.email}.
`;
}

module.exports = generateMarkdown;
