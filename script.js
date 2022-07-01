// Assignment code here
var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
var upperCaseArray = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var lowerCaseArray = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var symbolArray = ["!","@","#","$","%","^","&","*","(","?","/",];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var charactersLength = length;

function passwordParameters(){

  // password prompt lenght
  var length =  parseInt(prompt( "how many characters would you like the password to containt (8-128)"));
    if (Number.isNaN(length)) {
      alert("Must enter a number");
      return null;
    }

    if (length < 8 || length >128) {
      alert("Number must containt between 8-128");
      return null;
    }

  // Confirm on each of the arrays

  var isNumber = confirm ("press ok if you want it to containt numbers");

  // Confirm Upper case
  var isUpperCase = confirm ("press ok if you want it to containt uppercase");
  // Confirm Lower case
  var isLowerCase = confirm ("press ok if you want it to containt lowercase");
  // Confirm Symbols case
  var isSymbol = confirm ("press ok if you want it to containt lowercase");

  if (isNumber === false && isUpperCase === false && isLowerCase=== false && isSymbol===false) {
    alert("Password needs to include 1 Character type");

    return null;
    
  }
  
  var userSelection = {
    length:length,
    isUpperCase:isUpperCase,
    isLowerCase:isLowerCase,
    isSymbol:isSymbol,
    isNumber:isNumber
  };

  return userSelection;
};

//random function to process array


// create generatePassword function.
function generatePassword(){
  
  var userInput = passwordParameters();
     // EMPTY ARRAY

    var userChoice = [];

     //independent random fuction
  if (userInput.isUpperCase) {
    userChoice = userChoice.concat(upperCaseArray);
  }

  if (userInput.isLowerCase) {
    userChoice = userChoice.concat(lowerCaseArray);
  }
  
  if (userInput.isNumber) {
    userChoice = userChoice.concat(numberArray);
  }

  if (userInput.isSymbol) {
    userChoice = userChoice.concat(symbolArray);
  }


  var newPassword = "";
  for (var i = 0; i < charactersLength; i++) {
      var randomChar = Math.floor(Math.random() * userChoice.length);
      newPassword = newPassword + userChoice[randomChar];
  }
 console.log(newPassword);
  // display generated password!
  return newPassword;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);