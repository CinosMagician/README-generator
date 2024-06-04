const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [];

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
            choices: ["Apache 2.0", "GPLv3", "MIT", "BSD 2--Clause", "BSD 3--Clause", "Boost 1.0", "CC0 1.0", "EPL 1.0", "AGPL v3", "GPL v2", "LGPL v2.1", "MPL 2.0", "Unlicense", "None"]
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
        {
            type: "input",
            message: "What is your GitHub username:",
            name: "github"
        },
        {
            type: "input",
            message: "What is your contact email address:",
            name: "email"
        },
    ]).then((response) => {
        for (q in response){
            questions[q] = response[q]
        };
        writeToFile('./assets/output/README.md', questions);
    })
};

function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('Success!')
    )
}

function init() {
    collectData();
}

init();
