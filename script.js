// I am writing the variables for the promt
var generateBtn = document.querySelector("#generate");

var lowercase = "qwertyuiopasdfghjklzxcvbnm"
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM"
var number = "1234567890"
var specialCharacters = "+_*&^%$#@!"

function charactergenerator(str) {
  return str[Math.floor(Math.random() * str.length)]
}

// Get references to the #generate element
// I made a function gen password in side the function i made the prompt appear with the questions and if statements 
// Should i make an else statement?




function generatePassword() {
  var length; 
  var password = ""
  var passwordoptions = ""
console.log("nice you clicked the button ...")

  
  while (length < 8 || length > 128 || isNaN(length)) {
    length = parseInt(prompt("Thank you for chosing us to make your password! Select how many characters you would like to have 8-128"))
  }

  var includelowercase = confirm("Would you like to have lowercase letters?");
  var includeuppercase = confirm("Would you like to have letters?");
  var includenumbers = confirm("Would you like to have numbers?");
  var includespecialcharacters = confirm("Would you like to have special characters?");



  if (includelowercase) {
    password += charactergenerator(lowercase)
    passwordoptions += lowercase
  }

  if (includeuppercase) {
    password += charactergenerator(uppercase)
    passwordoptions += uppercase
  }

  if (includenumbers) {
    password += charactergenerator(number)
    passwordoptions += number
  }

  if (includespecialcharacters) {
    password += charactergenerator(specialCharacters)
    passwordoptions += specialCharacters
  }

  for (let i = password.length; i < length; i++) {
    password += charactergenerator(passwordoptions)
    
  }
if (includelowercase === false && includeuppercase === false && includenumbers === false && includespecialcharacters === false) {
    alert("You must select least one option.")
    location.reload()
    };
// how can i make the promt reload when all statements are false?

  return password 

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
