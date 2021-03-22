// Assignment Code
var generateBtn = document.querySelector("#generate");

var hasLowerCaseLetters = document.getElementById("lcchar").checked;
var hasUpperCaseLetters = document.getElementById("ucchar").checked;
var hasNumbers = document.getElementById("nchar").checked;
var hasSpecialCharacters = document.getElementById("spchar").checked;
let characters = "";

// Write password to the #password input
function writePassword() {
  
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let passwordLength = 0;
 
  passwordLength = document.getElementById("pwleng").value;
    console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be 8-128 characters in length")
  } 
  console.log(hasLowerCaseLetters);
  console.log(hasUpperCaseLetters);
  console.log(hasNumbers);
  console.log(hasSpecialCharacters);
  console.log(lowerCaseLetters[15])
  if (!hasLowerCaseLetters && !hasNumbers && !hasSpecialCharacters && !hasUpperCaseLetters) {
    return;
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
  console.log(characters);

 generatePassword = function () {
    var charSetLength = characters.length;
    var password = "";
    for (let index = 0; index < passwordLength; index++) {
      password += characters[Math.floor(Math.random()*charSetLength)];
      ;
    }
    return password;
  }
password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// TODO: add ifs for passwordLength, lowerCaseLetters, upperCaseLetters, numbers, specialCharacters
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
