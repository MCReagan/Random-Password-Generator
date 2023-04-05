var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var password = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !#$%&'()*+,-./:;<=>?@[]^\_`{|}~";

    if (confirm("Would you like to include Upper Case characters?")) {
        var passwordReplace = password;
    } else {
        var passwordReplace = password.replace("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "");
    };

    if (confirm("Would you like to include lower case characters")) {
        var passwordReplace1 = passwordReplace;
    } else {
        var passwordReplace1 = passwordReplace.replace("abcdefghijklmnopqrstuvwxyz", "");
    };

    if (confirm("Would you like to include numbers?")) {
        var passwordReplace2 = passwordReplace1;
    } else {
        var passwordReplace2 = passwordReplace1.replace("0123456789", "");
    };

    if (confirm("Would you like to include special characters?")) {
        var passwordReplace3 = passwordReplace2;
    } else {
        var passwordReplace3 = passwordReplace2.replace(" !#$%&'()*+,-./:;<=>?@[]^\_`{|}~", "");
    };

    if (passwordReplace3 == "") {
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
};

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);