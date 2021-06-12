// Variables

//Password Variable
var PassWord = '';

//Criteria Variables
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';

//Criteria Selection Varriables
var lowercaseSelection = false;
var uppercaseSelection = false;
var numbersSelection = false;
var symbolsSelection = false;


//Generate Function
function generate() {


  var passwordLength = '';


  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {passwordLength = prompt("How long would like your password? (MUST be between 8 to 128 characters)");

  if (passwordLength === null) {break;} 
  console.log("How long would like your password? (MUST be between 8 to 128 characters)"); 
  console.log(passwordLength);
}


//Password Criteria Prompts

if (passwordLength) {
   
  if (confirm("Will password contain lowercase characters?") == true) {lowercaseSelection = true} 
  console.log("Will password contain lowercase characters?");
  console.log(lowercaseSelection);

  if (confirm("Will password contain uppercase characters?") == true) {uppercaseSelection = true}
  console.log("Will password contain uppercase characters?");
  console.log(uppercaseSelection);

  if (confirm("Will password contain numerical characters?") == true) {numbersSelection = true}
  console.log("Will password contain numerical characters?");
  console.log(numbersSelection);

  if (confirm("Will password contain symbols?") == true) {symbolsSelection = true}
  console.log("Will password contain symbols characters?");
  console.log(symbolsSelection);

  //Confirmation of Criteria Prompts
  if (lowercaseSelection === false && uppercaseSelection === false && numbersSelection === false && symbolsSelection === false) {alert("Password MUST contain at least 1 character type.")}
}

//Random Characters

var characters = '';
characters += (lowercaseSelection ? lowercase : '');
characters += (uppercaseSelection ? uppercase : '');
characters += (numbersSelection ? numbers : '');
characters += (symbolsSelection ? symbols : '');

PassWord = password(passwordLength, characters);

document.getElementById("password").innerHTML = PassWord;
console.log("Your Password is:");
console.log(PassWord);
}


function password(l, characters) {
  var PassWord = '';

  for (var i = 0; i < l; ++i) {
  PassWord += characters.charAt(Math.ceil(Math.random() * characters.length));
  }
  return PassWord;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

