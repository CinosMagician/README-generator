// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const colors = require('colors');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];
let data = {
    projectTitle: "",
    description: "",
    installInstructions: "",
    usageInfo: "",
    license: "",
    conGuidelines: "",
    testInstructions: ""
};

function collectData() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please enter the title for this project:",
            name: "projectTitle"
        },
        {
            type: "input",
            message: "Please enter a description for this project:",
            name: "description"
        },
        {
            type: "input",
            message: "Please enter the installation instructions:",
            name: "installInstructions"
        },
        {
            type: "input",
            message: "Please enter usage information:",
            name: "usageInfo"
        },
        {
            type: "list",
            message: "Please choose the license you are using? (Select 'None' for no license):",
            name: "license",
            choices: ["Apache_2.0", "GPLv3", "MIT", "BSD_2--Clause", "BSD_3--Clause", "Boost_1.0", "CC0_1.0", "EPL_1.0", "AGPL_v3", "GPL_v2", "LGPL_v2.1", "MPL_2.0", "Unlicense", "None"]
        },
        {
            type: "input",
            message: "Please enter any contribution guidelines:",
            name: "conGuidelines"
        },
        {
            type: "input",
            message: "Please enter testing instructions:",
            name: "testInstructions"
        },
    ]).then((response) => {
        data.projectTitle = response.projectTitle
        data.description = response.description
        data.installInstructions = response.installInstructions
        data.usageInfo = response.usageInfo
        data.license = response.license
        data.conGuidelines = response.conGuidelines
        data.testInstructions = response.testInstructions
        writeToFile('README.md', data);
    })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
    collectData();
}

// Function call to initialize app
init();
