// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create prompt with instructions after button is clicked

var characters = prompt ("Enter a number between 8 and 128 characters");

//create variables using a for loop and multiple if else statements. 
 var lowerCase = "abcdefghijklmnopqrstuvwxyz";
 var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var numChar = "0123456789";
 var specialCase = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"


 // create if/else statements

 if (characters<8) {
     alert("Password length must be between 8 and 128 characters");
 } else if (characters>128){
     alert("Password length must be between 8 and 128 characters");
 } 



