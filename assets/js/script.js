// Assignment Code
var generateBtn = document.querySelector('#generate');

upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
numeric: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
special: ['!', '#', '$', '%', '&', '*', '+', '-', '/', '?', '@', '^', '~', '='] 

//Clicking the button initiates the first prompt asking the user their desired password length
generateBtn.addEventListener('click', function() {
	var lengthprompt = prompt('Please choose password length(Must be between 8 and 128 characters).');
	var passwordlength = lengthprompt;	
	
	if (passwordlength >= 8 && passwordlength <= 128) {
		var uppercase = confirm('Do you want your password to contain uppercase characters?');
		var lowercase = confirm('Do you want your password to contain lowercase characters?');
		var numeric = confirm('Do you want your password to contain numeric characters?');
		var special = confirm('Do you want your password to contain special characters?');
	} else {
		alert('Please select a password length between 8 and 128 characters.');
		}	
	}

);


//Next need to use variables of true/false values in above function to determine what will be used to generate password

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword); 
