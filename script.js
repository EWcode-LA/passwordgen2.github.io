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
 var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];;
 var specialCase = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
 var options;

 // create if/else statements

 if (characters<8) {
     alert("Password length must be between 8 and 128 characters");
 } else if (characters>128){
     alert("Password length must be between 8 and 128 characters");
 } 

//add function to allow user to choose to add elements of variables to generate password. 

lowerCase = confirm("Do you want lowercase characters in your password?")
if (lowerCase) {
  alert("Great")
}
else {
  alert("Ok")
}

upperCase = confirm("Do you want uppercase characters in your password?")
if (upperCase) {
  alert("Great")
}
else {
  alert("Ok")
}

numChar = confirm("Do you want number characters in your password?")
if (numChar) {
  alert("Great")
}
else {
  alert("Ok")
}

specialCase = confirm("Do you want special case characters in your password?")
if (specialCase) {
  alert("Great")
}
else {
  alert("Ok")
}

if (!lowerCase && !upperCase && !numChar && !specialCase) {
  return alert("You must select at least one of the criteria. Please try again!")
}

else if (!lowerCase && !upperCase && !numChar && !specialCase) {
  options = lowerCase.concat(upperCase, numChar, specialCase);
}

else if (upperCase && numChar && specialCase) {
  options = upperCase.concat(numChar, specialCase);
}

else if (lowerCase && numChar && specialCase) {
  options = lowerCase.concat(numChar, specialCase);
}

else if (lowerCase && upperCase && specialCase) {
  options = lowerCase.concat(upperCase, specialCase);
}

else if (lowerCase && upperCase && specialCase) {
  options = lowerCase.concat(upperCase, numChar);
}

else if (numChar && specialCase) {
  options = numChar.concat(specialCase);
}

else if (upperCase && specialCase) {
  options = upperCase.concat(specialCase);
}

else if (upperCase && numChar) {
  options = upperCase.concat(numChar);
}

else if (lowerCase && specialCase) {
  options = lowerCase.concat(specialCase);
}

else if (lowerCase && numChar) {
  options = lowerCase.concat(numChar);
}

else if (lowerCase && upperCase) {
  options = lowerCase.concat(upperCase);
}

else if (lowerCase) {
  options = lowerCase;
}

else if (upperCase) {
  options = upperCase;
}

else if (numChar) {
  options = numChar;
}

else if (specialCase) {
  options = specialCase
}

var results =[]

for(var i = 0; i < length; i++) {
  var temp = options[Math.floor(Math.random() * options.length)];
  results.push(temp);
};


