const prompt = require("prompt-sync")();

console.log("Welcome To The Space Quizz!");

let correctAnswers = 0;
const totalQuestions = 5;

const answer1 = prompt("Which is the densest plant in our solar system?  ");
const correctAnswer1 = "VENUS";
 
if(answer1.toUpperCase() === correctAnswer1) 
{
  console.log("You got it correct!");
  correctAnswers++;
} 
else 
{
  console.log("You got it wrong...");
}

const answer2 = prompt("Which planet is also called as the 'Red Planet'?  ");
const correctAnswer2 = "MARS";

if (answer2.toUpperCase() === correctAnswer2) 
{
  console.log("You got it correct!");
  correctAnswers++;
} 
else 
{
  console.log("You got it wrong...");
}

const answer3 = prompt("Which is the brigthest star in the night sky?  ");
const correctAnswer3 = "SIRIUS";

if (answer3.toUpperCase() === correctAnswer3) 
{
  console.log("You got it correct!");
  correctAnswers++;
} else 
{
  console.log("You got it wrong...");
}

const answer4 = prompt("Which planet has the most number of moons?  ");
const correctAnswer4 = "SATURN";

if(answer4.toUpperCase() === correctAnswer4)
{
    console.log("You got it correct!");
    correctAnswers++;
}
else
{
    console.log("You got it wrong...");
}

const answer5 = prompt("What is the asteroid belt located between?  ");
const correctAnswer5 = "MARS AND JUPITER";

if(answer5.toUpperCase() === correctAnswer5)
{
    console.log("You got it correct!");
    correctAnswers++;
}
else
{
    console.log("You got it wrong...");
}

const percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log("You got", correctAnswers, "questions correct!  ");
console.log("You scored", percent.toString() + "%");



// const prompt = require("prompt-sync")();

// console.log("Welcome to the Computer Hardware Quiz!");

// let correctAnswers = 0;
// const totalQuestions = 3;

// const answer1 = prompt("What is the brain of the computer? ");
// const correctAnswer1 = "CPU";

// if (answer1.toUpperCase() === correctAnswer1) {
//   console.log("You got it correct!");
//   correctAnswers++;
// } else {
//   console.log("You got it wrong...");
// }

// const answer2 = prompt("What is better a 3090ti or a 4060? ");
// const correctAnswer2 = "3090ti";

// if (answer2.toLowerCase() === correctAnswer2) {
//   console.log("You got it correct!");
//   correctAnswers++;
// } else {
//   console.log("You got it wrong...");
// }

// const answer3 = prompt("What is the reccomend amount of RAM in 2023? ");
// const correctAnswer3 = "16GB";

// if (answer3.toUpperCase() === correctAnswer3) {
//   console.log("You got it correct!");
//   correctAnswers++;
// } else {
//   console.log("You got it wrong...");
// }

// const percent = Math.round((correctAnswers / totalQuestions) * 100);

// console.log("You got", correctAnswers, "questions correct!");
// console.log("You scored", percent.toString() + "%");