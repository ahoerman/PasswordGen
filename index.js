let inquirer = require("inquirer");
let PasswordGenObj = require("./password.js");

let newRandomPassword = "";

console.log("Lets Generate a Password!");

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
            console.log(newRandomPassword);
        });

passwordPrompts();
