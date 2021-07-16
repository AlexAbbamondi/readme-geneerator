// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "title",
        message: "Enter a title:"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description:"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter dependency installation instructions -i.e. npm i:" //npm install
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage instructions:"
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter how to contribute to the project:"
    },
    {
        type: "input",
        name: "test",
        message: "Enter test instuctions -i.e. node index.js:" //node index.js
    },
    {
        type: "list",
        name: "license",
        choices: ["MIT", "Apache", "GPL", "No License"]
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
     fs.writeFileSync(path.join(process.cwd(), fileName), data, err => {
        err ? console.log(err) : console.log("Created Successfully!");
    })
}

// TODO: Create a function to initialize app
const init = () => {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile("README.md", generateMarkdown(answers));
        })
}

// Function call to initialize app
init();
