// Assignment code here

var charSets = {

  theNumbers : "1234567890",
  lowerCase : "abcdefghijklmnopqrstuvwxyz",
  upperCase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  theSymbols : "!@#$%%^&*",

}

var length = ""
var lowerCasePrompt = ""
var upperCasePrompt = ""
var symbolsPrompt = ""
var numbersPrompt = ""




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function allPrompts() {
  length = Number(prompt("Pick a password length between 8 and 124"))

    if (length < 8 || length > 124) {
      alert("You picked an invalid number, please pick a number between 8 and 124")
      allPrompts() 

    }else {
      console.log("plzz")
    } 




  // lowerCasePrompt = window.prompt( "Do you want lowercase  included in password click okay if yes")

  // upperCasePrompt = window.prompt( "Do you want upper case included in password click okay if yes")

  // symbolsPrompt = window.prompt( "Do you want symbols included in password click okay if yes")
  
  // numbersPrompt = window.prompt( "Do you want numbers included in password click okay if yes")


  


  



  // else {
  //   console.log("u picked rite boiiiii")
  // }


}

function generatepassword() {
  var passwordValue 
  for( var i = 0; i < length; i++) {
    passwordValue += charSets.charAt(
      Math.floor(Math.random() * charSets.length)

    )   
  }
}



  






// Add event listener to generate button
generateBtn.addEventListener("click", allPrompts);




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
