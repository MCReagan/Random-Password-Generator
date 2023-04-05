var generateBtn = document.querySelector("#generate");
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !#$%&'()*+,-./:;<=>?@[]^\_`{|}~";
var pass = "";

function generatePassword() {

    if (confirm("Would you like to include Upper Case characters?")) {
        var charsReplace = chars;
    } else {
        var charsReplace = chars.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
    };

    if (confirm("Would you like to include lower case characters")) {
        var charsReplace1 = charsReplace;
    } else {
        var charsReplace1 = charsReplace.replace("abcdefghijklmnopqrstuvwxyz", "");
    };

    if (confirm("Would you like to include numbers?")) {
        var charsReplace2 = charsReplace1;
    } else {
        var charsReplace2 = charsReplace1.replace("0123456789", "");
    };

    if (confirm("Would you like to include special characters?")) {
        var charsReplace3 = charsReplace2;
    } else {
        var charsReplace3 = charsReplace2.replace(" !#$%&'()*+,-./:;<=>?@[]^\_`{|}~", "");
    };

    if (charsReplace3 == "") {
        alert("Please choose at least one category of characters.");
        generatePassword();
        return;
    };

    let length = prompt("Choose a password length between 8 and 128 characters");

    if (length < 8 || length > 128) {
        alert("Please choose a password length beween 8 and 128 characters");
        generatePassword();
        return;
    }

    console.log(charsReplace3 , charsReplace3.length , length);

    // for (var i = 0; i <= length; i++) {
    //     var randomNumber = Math.floor(Math.random() * charsReplace3.length);
    //     pass += charsReplace3.substring(randomNumber, randomNumber +1);
    // }
    
    // console.log(randomNumber);
    // console.log(length);
};

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);