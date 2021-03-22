// Assignment Code
var generateBtn = document.querySelector("#generate");

var hasLowerCaseLetters = document.getElementById("#lcchar").checked;
var hasUpperCaseLetters = document.getElementById("#ucchar").checked;
var hasNumbers = document.getElementById("#nchar").checked;
var hasSpecialCharacters = document.getElementById("#spchar").checked;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let passwordLength = 0;
 
  passwordLength = document.getElementById("#pwleng").value;
    
  if (passwordLength < 8 || passwordLength > 128) {
      window.prompt("Password length must be 8-128 characters in length")
  } 
  var settings = {
    passwordLength,
    hasLowerCaseLetters,
    hasUpperCaseLetters,
    hasNumbers,
    hasSpecialCharacters
  }
  if (hasLowerCaseLetters) {
    characters += lowerCaseLetters
  } if (hasUpperCaseLetters) {
    characters += upperCaseLetters
  } if (hasNumbers) {
    characters += numbers
  } if (hasSpecialCharacters) {
    characters += specialCharacters
  }

 generatePassword = function (characters) {
    var charSetLength = characters.length;
    var results = "";
    for (let index = 0; index < passwordLength; index++) {
      results += characters[Math.floor(Math.random()*charSetLength)];
      return results;
    }
  }

// TODO: add ifs for passwordLength, lowerCaseLetters, upperCaseLetters, numbers, specialCharacters
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
