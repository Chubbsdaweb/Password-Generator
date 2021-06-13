


var PassWord = '';


var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';


var lowercaseSelection = false;
var uppercaseSelection = false;
var numbersSelection = false;
var symbolsSelection = false;



function generate() {


  var passwordLength = '';


  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {passwordLength = prompt("How long would like your password? (MUST be between 8 to 128 characters)");

  if (passwordLength === null) {break;} 

}




if (passwordLength) {
   
  if (confirm("Will password contain lowercase characters?") == true) {lowercaseSelection = true} 


  if (confirm("Will password contain uppercase characters?") == true) {uppercaseSelection = true}


  if (confirm("Will password contain numerical characters?") == true) {numbersSelection = true}


  if (confirm("Will password contain symbols?") == true) {symbolsSelection = true}
 

  
  if (lowercaseSelection === false && uppercaseSelection === false && numbersSelection === false && symbolsSelection === false) {alert("Password MUST contain at least 1 character type.")}
}



var characters = '';
characters += (lowercaseSelection ? lowercase : '');
characters += (uppercaseSelection ? uppercase : '');
characters += (numbersSelection ? numbers : '');
characters += (symbolsSelection ? symbols : '');

PassWord = password(passwordLength, characters);

document.getElementById("password").innerHTML = PassWord;

}


function password(x, characters) {
  var PassWord = '';

  for (var i = 0; i < x; ++i) {
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

