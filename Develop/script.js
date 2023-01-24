// Assignment code here
var length = []


var generateBtn = document.querySelector("#generate");



let lowerCase =[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperCase =[ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let specialChar =['!', '@', '#', '$', '%', '^', '&', '*']
let numbers =['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']


let passwordOptions = lowerCase + upperCase + specialChar + numbers
let password = "";
function userOption() {


length = prompt("What would you like the length to be?");

if (length < 8 || length > 128) {
  alert("Please enter a number between 8 and 128");
  return null;
}



lowerCase = confirm("Would you like lower case characters?")

if (lowerCase){ password = userInfo + userOption.toLowerCase;
  console.log(lowerCase);


}


upperCase = confirm("Would you like upper case characters?") 
  
  if (upperCase){ password = userInfo + userOption.toUpperCase;
   console.log(upperCase);
}



numbers = confirm("Would you like to add numbers?") 
  if (numbers){ password = userInfo + userOption.tonumbers;
    console.log(numbers);
  
}


specialChar = confirm("Would you like special characters?") 
if (specialChar){ password = userInfo + userOption.specialChar;
  console.log(specialChar);
  
};





function generatePassword() {
  var userChoices = password()
  var password = "";
  for(let i = 0; i < length; i++){
    password += userChoices[Math.floor(Math.random() * choiceArray.length)];
    

  };

  return password;
}

// Write password to the #password input
function password() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", password)};
