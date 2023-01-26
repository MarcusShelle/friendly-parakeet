// Assignment code here


var length;
var userInfo = []

var generateBtn = document.querySelector("#generate");

let lowerCase =[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperCase =[ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let specialChar =['!', '@', '#', '$', '%', '^', '&', '*']
let numbers =['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

let passwordOptions = lowerCase + upperCase + specialChar + numbers
let randomCharacters = "";

function userOption() {

  length = prompt("What would you like the length to be?");

  if (length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128");
    return null;
  }

  let confirmLowerCase = confirm("Would you like lower case characters?")

  if (confirmLowerCase) { 
    console.log(confirmLowerCase);
    randomCharacters = randomCharacters + lowerCase;
    console.log(randomCharacters);

  }

  let confirmUpperCase = confirm("Would you like upper case characters?") 
    
  if (upperCase){ 
    console.log(confirmUpperCase);
    randomCharacters = randomCharacters + upperCase;
    console.log(randomCharacters);
  }

  let confirmNumbers = confirm("Would you like to add numbers?") 

  if (numbers){ 
    console.log(confirmNumbers);
    randomCharacters = randomCharacters + numbers;
    console.log(randomCharacters);
    
  }

  let confirmSpecialChar = confirm("Would you like special characters?")

  if (specialChar){ 
    console.log(confirmSpecialChar);
    randomCharacters = randomCharacters + specialChar;
    console.log(randomCharacters);
  };

}



function generatePassword() {
  var userChoices = userOption()
  var randomPassword = "";
  for(let i = 0; i < length; i++){
    userChoices += userInfo[Math.floor(Math.random() * userInfo.length)];
    

  };

  return userChoices;
}

// Write password to the #password input
function password() {
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;

}


// Add event listener to generate button
generateBtn.addEventListener("click", password);
