// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![badge](https://img.shields.io/badge/License-${license.replace(" ", "_")}-blue.svg)`
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This application is covered by the ${license} license.`
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectTitle}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Installation](#installation-instructions)
- [Usage](#usage-info)
${renderLicenseLink(data.license)}
- [Contributions](#contributions)
- [Testing](#testing-instructions)
- [Questions](#questions)

## Installation Instructions

${data.installInstructions}
    
## Usage Info

${data.usageInfo}

${renderLicenseSection(data.license)}

## Contributions

${data.conGuidelines}

## Testing Instructions
    
${data.testInstructions}

## Questions

If you wish to see any of my other works,
here is a link to my GitHub Page: [${data.github}](https://github.com/${data.github})

If you wish to contact me directly, please email me: ${data.email}
`;
}

module.exports = generateMarkdown;
