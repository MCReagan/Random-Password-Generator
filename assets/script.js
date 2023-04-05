var generateBtn = document.querySelector("#generate");

function generatePassword() {
};

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);