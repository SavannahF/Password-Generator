// Password-Generator JS sheet

// Variables for character types
// Special characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Uppercase letters
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Lowercase letter function (from uppercase values)
var toLower = function (x) {
  return x.toLowerCase();
};
// Lowercase letter storage as variable
lower = upper.map(toLower);

// Variables for user input types
var enter;
var confirmCharacter;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// After clicking the button...
function generatePassword() {
  // Asks for user input
  enter = parseInt(prompt("Please choose the number of characters for your password (must be between 8 - 128)."));
  // User doesn't enter a value?
  if (!enter) {
      alert("Enter a number between 8 and 128.");
  } 
  else if (enter < 8 || enter > 128) {
      // Must enter the correct number or else
      enter = parseInt(prompt("Please choose a number between 8 and 128."));
  } 
  else {
      // Pops up after valid number entered; must click 
      confirmNumber = confirm("Would you like numbers?");
      confirmCharacter = confirm("What about special characters?");
      confirmUppercase = confirm("Would you like Uppercase letters?");
      confirmLowercase = confirm("And finally, what about lowercase letters?");
  };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

