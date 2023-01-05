// Assignment code here
var generateBtn = document.querySelector("#generate");
var lowerCase =[ 'a', 'b', ]


function userInfo() {


  var length = prompt("What would you like the length to be?")

if (length < 8 || length > 128) {
  alert("please enter a number between 8 and 128")
  return null;
}

var isLowerCase = confirm("Would you like lower case characters?")
console.log(typeof length);












var userOptions = {
  length: length, 
  isLowerCase: isLowerCase,
}
  return userOptions;
}

function generatePassword() {
  var userChoices = userInfo()

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
