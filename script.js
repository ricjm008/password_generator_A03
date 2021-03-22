// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  //Boolean if check box is checked or not
  var hasLowerCaseLetters = document.getElementById("lcchar").checked;
  var hasUpperCaseLetters = document.getElementById("ucchar").checked;
  var hasNumbers = document.getElementById("nchar").checked;
  var hasSpecialCharacters = document.getElementById("spchar").checked;
//strings containing possible characters
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let passwordLength = 0;
  let characters = "";
  passwordLength = document.getElementById("pwleng").value;
    //limits password length
  if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password length must be 8-128 characters in length")
      return;
  } 
  //ends if none are selected
  if (!hasLowerCaseLetters && !hasNumbers && !hasSpecialCharacters && !hasUpperCaseLetters) {
    return;
  }
  //adds possible characters
  if (hasLowerCaseLetters) {
    characters += lowerCaseLetters
  } if (hasUpperCaseLetters) {
    characters += upperCaseLetters
  } if (hasNumbers) {
    characters += numbers
  } if (hasSpecialCharacters) {
    characters += specialCharacters
  }
 
//function with for loop generating password
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


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
