// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var uppercasearray =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"]
var lowercasearray = ["a","b","c","d","e"]
var numbersarray = [1,2,3,4,5,6,7,8,9]
var symbolsarray = ["!","@","#","$","&"]

function  generatePassword() {
  var length = parseInt(prompt("How long would you like your password to be? (8-128 characters)"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128.");
    return;
  }
/*added variables to confirm types*/
var uppercase = confirm("Would you like to include uppercase letters?");
var lowercase = confirm("Would you like to include lowercase letters?");
var numbers = confirm("Would you like to include numbers?");
var symbols = confirm("Would you like to include symbols?");
//if 
if (!uppercase && !lowercase && !numbers && !symbols) {
  alert("At least one character type must be selected.");
  return;
}

var possiblecharacters = []
if (uppercase === true){
possiblecharacters = possiblecharacters.concat (uppercasearray)

}
if (lowercase === true){
possiblecharacters = possiblecharacters.concat (lowercasearray)
}
if (numbers === true){
  possiblecharacters = possiblecharacters.concat (numbersarray)
}

if (symbols === true){
  possiblecharacters = possiblecharacters.concat (symbolsarray)
}
console.log(possiblecharacters)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



