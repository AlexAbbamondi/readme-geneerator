// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/apm/l/vim-mode)";
    case "Apache":
      return "![License](https://img.shields.io/aur/license/android-studio)";
    case "GPL":
      return "![License: GPL v3](https://img.shields.io/eclipse-marketplace/l/notepad4e)";
    case "No License":
      return "";
    default:
      return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPL":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "No License":
      return "";
    default:
      return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license != "") {
    return `# License\n${renderLicenseBadge(license)} ${renderLicenseLink(license)}`;
  } else {
    return "";
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

  <br/>
  
  # Description
  ${data.description}

  <br/>

  # Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  <br/>

  # Installation
  The following dependencies must be installed: 
  \`\`\`sh
  ${data.installation}
  \`\`\`

  <br/>

  # Usage
  To use this app you must: 
  ${data.usage}

  <br/>

  # Contributing
  ​In order to contribute you must: 
  ${data.contribution}

  <br/>

  # Tests
  You must run the following to test the application: 
  \`\`\`sh
  ${data.test}
  \`\`\`

  <br/>

  ${renderLicenseSection(data.license)}

  <br/>

  # Questions
   Questions or issues? Contact ${data.github} at ${data.email}.
`;
};

module.exports = generateMarkdown;
