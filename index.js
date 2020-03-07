let inquirer = require("inquirer");
// let PasswordGenObj = require("./password.js");

class PasswordGenObj {
    constructor(length, characters){
        this.length = length;
        this.characters = characters;
    }
    generatePassword() {
        const uppercase = ["A", "B", "C"];
        const lowercase = ["a","b","c"];

        const newPasswordArray = [];

        if(this.length > 8 && this.length < 128) {
            console.log("Good Choice!")
            if((this.characters).includes("Uppercase Letters")){
                newPasswordArray.push(uppercase);
            }
            if((this.characters).includes("Lowercase Letters")){
                newPasswordArray.push(lowercase);
            }
            console.log(newPasswordArray);
        } else {
            console.log("Please pick a length between 8 and 128!");
            passwordPrompts();
        }
    }
}


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
]).then(function(response){
    const password = new PasswordGenObj(response.length, response.characters);
    console.log(password);
    password.generatePassword();
});

passwordPrompts();
