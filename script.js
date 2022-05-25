

var numbers = ["0", "1", "2", "3", "4", "4", "5", "6", "7", "8", "9", "10"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~", "`"];

var passwordOptions = [];
var finalPassword = [];

// var length = ""
var lowerCasePrompt = ""
var upperCasePrompt = ""
var symbolsPrompt = ""
var numbersPrompt = ""

var choices = [

]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function allPrompts() {
  length = Number(prompt("Pick a password length between 8 and 124"))

  if (length < 8 || length > 124) {
    alert("You picked an invalid number, please pick a number between 8 and 124")
    allPrompts()
  }


  lowerCasePrompt = confirm("Do you want lowercase  included in password click okay if yes")

  if (lowerCasePrompt) {
    passwordOptions = passwordOptions.concat(lowerCase)
  }

  upperCasePrompt = confirm("Do you want upper case included in password click okay if yes")

  if (upperCasePrompt) {
    passwordOptions = passwordOptions.concat(upperCase)
  }

  symbolsPrompt = confirm("Do you want symbols included in password click okay if yes")
  if (symbolsPrompt) {
    passwordOptions = passwordOptions.concat(symbols)
  }

  numbersPrompt = confirm("Do you want numbers included in password click okay if yes")
  if (numbersPrompt) {
    passwordOptions = passwordOptions.concat(numbers)
  }


  console.log(lowerCasePrompt);
  console.log(upperCasePrompt);
  console.log(symbolsPrompt);
  console.log(numbersPrompt);

  console.log('passwordOptions', passwordOptions)

  for (var i = 0; i < length; i++) {
    finalPassword.push(getRandom(passwordOptions))
  }
  return finalPassword




}

function writePassword() {
  var password = allPrompts();
  var passText = document.getElementById('password')

  passText.value = password.join('')

}

function getRandom(passwordOptions) {
  var randomIndex = Math.floor(Math.random() * passwordOptions.length);
  var randomElement = passwordOptions[randomIndex]

  return randomElement
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
