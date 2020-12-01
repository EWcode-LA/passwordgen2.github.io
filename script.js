// Assignment Code
var generateBtn = document.querySelector("#generate");

//Dom elements
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomSymbol
};

generateEL.addEventListener('click', () => {
  const length = lengthEL.value;
});
//Generator Functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() *10) + 48);
}

function getRandomSymbol() {
  const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
  return symbols[Math.floor(Math.random() * symbols.length)];
}



//console.log(getRandomNumber());

generateBtn.addEventListener("click", function(event) {
  event.preventDefault();
  var characters = prompt("Please enter a number from 8 to 128 to generate your secure password!")
   while(length <=8 || length >=129 ){
     alert("Choose different characters")
     prompt("Choose between 8-128");
   }
});

// Write password to the #password input










