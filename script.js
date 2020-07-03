var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var specialCharacters = "!@#$%^&*?".split("");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  userLength = prompt(
    "Enter the number of characters you would like in your password. (Value must be from 8-128)"
  );
  if (userLength > 7 && userLength < 129) {
    userLowerCase = confirm(
      "Would you like lowercase letters in the password?"
    );
    userUpperCase = confirm(
      "Would you like uppercase letters in the password?"
    );
    userNumber = confirm("Would you like numbers in the password?");
    userSpecial = confirm("Would you like special characters in the password?");
  } else {
    alert("Your password must be between 8 and 128 characters.");
  }

  if (userLowerCase && userUpperCase && userNumber && userSpecial) {
    passGen = lowerCase.concat(upperCase, numbers, specialCharacters);
  } else {
    alert(
      "The following password criteria should be met: lowercase, uppercase, numbers, special characters."
    );
  }

  var passwordGenerated = [];
  for (var i = 0; i < userLength; i++) {
    var passWithUserLength =
      passGen[Math.floor(Math.random() * passGen.length)];
    passwordGenerated.push(passWithUserLength);
  }
  var password = passwordGenerated.join("");
  return password;
}

function copyText() {
  var copyText = password;
  copyText.select();
  document.execCommand("copy");
  alert("Password copied to clipboard.");
}
copyBtn.addEventListener("click", copyText);
