// Number 1:

var num = parseInt(prompt('Enter a positive integer:'));
var rounded = Math.round(num);
var floored = Math.floor(num);
const ceiled = Math.ceil(num);
document.write(`Number: ${num} <br>`);
document.write(`Rounded off value: ${rounded}<br>`);
document.write(`Floored value:${floored} <br>`);
document.write(`Ceiled value: ${ceiled}<br>`);


// Number 2:

var num = parseFloat(prompt('Enter a negative floating point number:'));
var rounded = Math.round(num);
var floored = Math.floor(num);
var ceilede = Math.ceil(num);
document.write(`Number: ${num}<br>`);
document.write(`Rounded: ${rounded}<br>`);
document.write(`Floored: ${floored}<br>`);
document.write(`Ceiled: ${ceilede}<br>`);



// Number 3:

var num = parseFloat(prompt('Enter a number:'));
  var abs = Math.abs(num);
  document.write(`The absolute value of ${num} is ${abs}`);

// Number 4:

var diceValue = Math.floor(Math.random() * 6) + 1;
  document.write(`You rolled a ${diceValue}`);

  var diceValue = Math.floor(Math.random() * 4) + 1;
  document.write(`You rolled a ${diceValue}`);


// Number 5:

var coinValue = Math.random() < 0.5 ? 'Heads' : 'Tails';
  document.write(`You got ${coinValue}`);


// Number 6:

var randomNumber = Math.floor(Math.random() * 100) + 1;
  document.write(`Random Number: ${randomNumber}`);


// Number 7:


var weightInput = prompt("Enter your weight:");
var weightValue = parseFloat(weightInput.replace('kgs', '').replace('kilograms', ''));
document.write(`Your weight is ${weightValue} kilograms`)

// Number 8:

var secretNumber = Math.floor(Math.random() * 10) + 1;
 userGuess = parseInt(prompt('Guess a number between 1 and 10:'));
if (userGuess === secretNumber) {
  document.write('Congratulations! You guessed the secret number!');
} else {
  document.write(`Sorry, the secret number was ${secretNumber}. Try again!`);
}
