// Assignment Code
/*This code selects the button in the document and sets it to a variable value*/
var generateBtn = document.querySelector('#generate');

//this is the function that utilizes the user's input to create the password
function generatePassword() {
	//this object holds all possible charactrs the following functions will use to create the password
	var chars = {
		specials: ['!', '#', '$', '%', '&', '*', '+', '-', '/', '?', '@', '^', '~'],
		number: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
		lower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
		upper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
	};

	//this prompt stores the chosen password length in the variable passLength 
	var passLength = prompt('Please choose password length(Must be between 8 and 128 characters).');
	//This if else statement collects true and false values for selected password characters
	if (passLength >= 8 && passLength <= 128) {
		var uppercase = confirm('Do you want your password to contain uppercase characters?');
		var lowercase = confirm('Do you want your password to contain lowercase characters?');
		var numeric = confirm('Do you want your password to contain numeric characters?');
		var special = confirm('Do you want your password to contain special characters?');
	} else {
		// else statement returns alert and will not run through character selection unless user chooses appropriate password length
		alert('Please select a password length between 8 and 128 characters.');
		}
		
	var pass = []; //Array made to store chosen potential characters for user's password

	//these if statements store the chars{} arrays chosen by the user into the pass array to be used as a bank to pick random password characters from in following for loop
	if (uppercase === true) {
		pass = pass.concat(chars.upper);
	}
	if (lowercase === true) {
		pass = pass.concat(chars.lower); 
	} 
	if (numeric === true) {
		pass = pass.concat(chars.number);
	}
	if (special === true) {
		pass = pass.concat(chars.specials); //why is it separating them by a comma?
	}
	console.log(pass);

	//for loop selects random characters from pass array to create password
	var password = [];
	for (var i = 0; i < passLength; i++) {
		var randNum = Math.floor(Math.random() * pass.length);
		var randChar = pass[randNum];
		password.push(randChar);
	}
	
	//this returns the password array that has been joined together into a string
	return password.join('');
  }

// Write password to the #password input  
  function writePassword() {
	var password = generatePassword();
	console.log(password);
  
	var passwordText = document.querySelector('#password');
	passwordText.value = password;
  }

  /*This code adds an event listener to the button that will initiate password creation once clicked*/
generateBtn.addEventListener('click', writePassword);

