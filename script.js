// Assignment code here
var charactersLength = 8;

var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
var upperCaseArray = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var lowerCaseArray = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var symbolArray = ["!","@","#","$","%","^","&","*","(","?","/",];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var charactersLenght = lenght

// create generatePassword function.
function generatePassword(){
  console.log("confirm test");
  
  
  //prompt for password 
  // 8 < 128 length
  // lower,upper,number,special character

  //validate the input.
  // generate password
  //display the password.





  return "generated password value";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);