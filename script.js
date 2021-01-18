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

function generatePassword() {
  //create variables using a for loop and multiple if else statements.
  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCase = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    " < ",
    "=",
    " > ",
    " ? ",
    "@",
    "[",
    "\\",
    "]",
    " ^ ",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];
  var options;

  // create if/else statements

  if (characters < 8) {
    alert("Password length must be between 8 and 128 characters");
  } else if (characters > 128) {
    alert("Password length must be between 8 and 128 characters");
  }

  //add function to allow user to choose to add elements of variables to generate password.
  var characters = parseInt(
    prompt("Enter a number between 8 and 128 characters")
  );

  var lower = confirm("Do you want lowercase characters in your password?");

  if (lower) {
    alert("Great");
  } else {
    alert("Ok");
  }

  var upper = confirm("Do you want uppercase characters in your password?");
  if (upper) {
    alert("Great");
  } else {
    alert("Ok");
  }

  var nums = confirm("Do you want number characters in your password?");
  if (nums) {
    alert("Great");
  } else {
    alert("Ok");
  }

  var special = confirm(
    "Do you want special case characters in your password?"
  );
  if (special) {
    alert("Great");
  } else {
    alert("Ok");
  }

  if (!lower && !upper && !nums && !special) {
    alert("You must select at least one of the criteria. Please try again!");
  } else if (!lower && !upper && !nums && !special) {
    options = lowerCase.concat(upperCase, numChar, specialCase);
  } else if (upper && nums && special) {
    options = upperCase.concat(numChar, specialCase);
  } else if (lower && nums && special) {
    options = lowerCase.concat(numChar, specialCase);
  } else if (lower && upper && special) {
    options = lowerCase.concat(upperCase, specialCase);
  } else if (lower && upper && special) {
    options = lowerCase.concat(upperCase, numChar);
  } else if (nums && special) {
    options = numChar.concat(specialCase);
  } else if (upper && special) {
    options = upperCase.concat(specialCase);
  } else if (upper && nums) {
    options = upperCase.concat(numChar);
  } else if (lower && special) {
    options = lowerCase.concat(specialCase);
  } else if (lower && nums) {
    options = lowerCase.concat(numChar);
  } else if (lower && upper) {
    options = lowerCase.concat(upperCase);
  } else if (lower) {
    options = lowerCase;
  } else if (upper) {
    options = upperCase;
  } else if (nums) {
    options = numChar;
  } else if (special) {
    options = specialCase;
  }

  var results = [];

  for (var i = 0; i < characters; i++) {
    var temp = options[Math.floor(Math.random() * options.length)];
    results.push(temp);
  }

  console.log(results);

  console.log(options);

  return results.join("");
}
