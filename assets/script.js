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
};

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);