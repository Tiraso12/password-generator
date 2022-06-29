// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

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


