// List of Required of Packages 
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const util = require('util');
const html = require('./src/html')
const card = require('./src/card')

// Required Employee information 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const mkdirAsync = util.promisify(fs.mkdir);
const writeFileAsync = util.promisify(fs.writeFile);

const output_dir = path.resolve(__dirname, 'output');
const outputPath =path.join(output_dir, 'team.html');

const render = require('./lib/htmlRenderer');
const { lastValueFrom, identity } = require('rxjs');
    
const questions = [
    {name: 'name', message: 'What is the employee name?'},
    {name: 'id', message: 'What is the employee ID #?'},
    {name: 'email', message: 'What is the employee email?'},
    {
        type: 'list',
        name: 'role',
        message: 'What is the employee role',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
];

const ManagerQuestions = [
    {
    name: 'officeNumber',
    message: 'What is your OffcieNumber? ',
    },
];

const EngineerQuestions = [
    {
    name: 'github',
    message: 'What is the Engineers github Username?'    
    },
];

const InternQuestions = [
    {
    name: 'school', 
    message: 'What school is the intern attending?'
    },
];

const confirm = [
    {
    type: 'confirm',
    name: 'adding',
    message: 'Did you want to include any additonal information?'
    },
];

const init = async () => {
    const employees = [];
    let addMore = true;

while (addMore) {

    const {name, id, email, role } = await inquirer.prompt(questions)

if(role === 'Manager') {
    const{ officeNumber } = await inquirer.prompt(ManagerQuestions)

employees.push(new Manager(name, id, email, officeNumber));
} else if (role === 'Engineer') {
const { github } = await inquirer.prompt (EngineerQuestions);

employees.push(new Engineer(name, id, email, github));
} else {
const { school } = await inquirer.prompt(InternQuestions)

employees.push(new Intern(name, id, email, school));
}

const { adding } = await inquirer.prompt(confirm);

addMore = adding;
}

console.log(employees)

let cards = ""
  
 for (let i = 0; i < employees.length; i++) {
         
       cards = cards + card(employees[i])
 }
  fs.writeFileSync("./dist/index.html", html(cards))

};

init();
