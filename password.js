class PasswordObj {
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
            // if (this.characters.includes("Uppercase Letters")){
            //     newPasswordArray += [...uppercase];
            // }
            // if (this.characters.includes("Lowercase Letters")){
            //     newPasswordArray += [...lowercase];
            // }
            // console.log(newPasswordArray);
        } else {
            console.log("Please pick a length between 8 and 128!");
            passwordPrompts();
        }
    }
}

module.exports = PasswordObj;