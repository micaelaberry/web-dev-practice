//secret number
var secretNumber = 9;

//ask user for guess
var stringGuess = Number(prompt("Guess a number!"));
var guess = Number(stringGuess);

//check guess
if(guess === secretNumber){
alert("You got it right! You go Glen Coco! Party Time!");	
}
//check if number is higher
else if(guess > secretNumber) {
alert("Too High... Guess again.");
}

//otherwise, check if lower
else {
alert("Too low... Guess again.");
}
