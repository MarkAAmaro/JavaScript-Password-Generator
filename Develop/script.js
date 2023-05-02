// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function writePassword() 
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

function generatePassword 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



