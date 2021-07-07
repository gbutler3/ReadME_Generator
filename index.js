// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptquestions = ()=>{
    return inquirer.prompt([
    {
        type: "input",
        message: "What is the Title of your Project?",
        name: "title",
    },
    {
        type: "input",
        message: "Give a description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "install",
    },
    {
        type: "input",
        message: "What is the use case for this project?",
        name: "directions",
    },
    {
        type: "input",
        message: "how do you test this project?",
        name: "test",
    },
    {
        type: "rawlist",
        message: "what license are you using?",
        name: "license",
        choices: ["none", "MIT", "APACHE 2.0", "GPL 3.0", "BSD 3"]
    },
    {
        type: "input",
        message: "Who contributed to this project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "what is your Github username?",
        name: "github",
    },
    {
        type: "input",
        message: "what is your email?",
        name: "email"
    }
]);
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err =>{
        if (err){
            throw err;
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    promptquestions()
    .then((data) => writeToFile('README.md', generateMarkdown(data)))

}

// Function call to initialize app
init();
