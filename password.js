class PasswordGenObj {
    constructor(length, characters) {
        this.length = length;
        this.characters = characters;
    }
    generatePassword() {
        const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        const specialChar = ["!", "@", "#", "$", "&", "*", "?"]

        let newPasswordArray = [];

        if (this.length > 8 && this.length < 128) {
            if ((this.characters).includes("Uppercase Letters")) {
                newPasswordArray = [...newPasswordArray, ...uppercase];
            }
            if ((this.characters).includes("Lowercase Letters")) {
                newPasswordArray = [...newPasswordArray, ...lowercase];
            }
            if ((this.characters).includes("Numbers")) {
                newPasswordArray = [...newPasswordArray, ...numbers];
            }
            if ((this.characters).includes("Special Characters")) {
                newPasswordArray = [...newPasswordArray, ...specialChar];
            } else {
                console.log("Please pick atleast one set of characters!")
                // passwordPrompts();
            }
            console.log(newPasswordArray);
            console.log(newPasswordArray[25]);
        } else {
            console.log("Please pick a length between 8 and 128!");
            // passwordPrompts();
        }
    }
}

module.exports = PasswordGenObj;