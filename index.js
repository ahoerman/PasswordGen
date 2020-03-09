const inquirer = require("inquirer");
const PasswordGenObj = require("./password.js");
const chalk = require("chalk")

let newRandomPassword = "";

console.log(chalk.bold.green("Lets Generate a Password!"));

let passwordPrompts = () =>
    inquirer
        .prompt([{
            type: "input",
            message: "How long would you like your password to be? (Choose a Length Between 8-128 Characters)",
            name: "length"
        },
        {
            type: "checkbox",
            message: "What would you like your password to contain?",
            choices: ["Uppercase Letters", "Lowercase Letters", "Numbers", "Special Characters"],
            name: "characters"
        }
        ]).then(function (response) {
            const password = new PasswordGenObj(response.length, response.characters);
            let newArray = password.generatePassword();
            for (i=1;i<=(response.length);i++) {
                let rand = newArray[Math.floor(Math.random()*newArray.length)];
                newRandomPassword = newRandomPassword.concat(rand);
            }
            console.log(chalk.bold("Your Randomly Generated Password:"));
            console.log(chalk.blue(newRandomPassword));
        });

passwordPrompts();
