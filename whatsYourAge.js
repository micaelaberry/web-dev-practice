var age = Number(prompt("What is your age?"));

if (age > 0){
	console.log("Please enter a valid age");
}
if (age === 21){
	console.log("Happy Birthday!");
}
if (age % Math.sqrt(age)===0) {
	console.log("You are a square like your age");
}