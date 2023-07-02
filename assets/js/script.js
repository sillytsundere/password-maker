// Assignment Code
/*This code selects the button in the document and sets it to a variable value*/
var generateBtn = document.querySelector('#generate');


function writePassword() {
	var password = generatePassword() {
		var passwordlength = prompt('Please choose password length(Must be between 8 and 128 characters).');
	//This if else statement collects true and false for what kinds of characters the user wants in their password
	if (passwordlength >= 8 && passwordlength <= 128) {
		var uppercase = confirm('Do you want your password to contain uppercase characters?');
		var lowercase = confirm('Do you want your password to contain lowercase characters?');
		var numeric = confirm('Do you want your password to contain numeric characters?');
		var special = confirm('Do you want your password to contain special characters?');
	} else {
		alert('Please select a password length between 8 and 128 characters.');
		}	
	}
	var passwordText = document.querySelector('#password');

	passwordText.value = password;

};

/*This code adds an event listener to the button that will initiate password creation once clicked*/
generateBtn.addEventListener('click', writePassword);
/*
{
upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
numeric: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
special: ['!', '#', '$', '%', '&', '*', '+', '-', '/', '?', '@', '^', '~', '='] } */