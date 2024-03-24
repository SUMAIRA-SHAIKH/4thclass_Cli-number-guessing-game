#! /usr/bin/env node
console.log("\t\n ID:11709----------------****------------------SUMAIRA AZIZ");
console.log("\n\t\t~WELCOME TO A NUMBER GUESSING GAME!~");
console.log("\t\t------------------------------------");
import inquirer from "inquirer";
// 1) Computer will generate a random number
// 2) user input for guessing number
// 3) compare user input
//const randomNumber =13; // PROGRAMER select randam no every time 13 is correct.
const randomNumber = Math.floor(Math.random() * 10 + 1); // output will be 0 (BUT U WILL MULTIPLY BY 10)
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1 to 10: ",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("Opps! you guessed wrong number.");
}
//2nd method now computer generate a random number only user guesed
//MATH is constractor math k saray functions hoty hain
//const randomNumber = Math.random() 
//  console.log(randomNumber)  //output will come in decimals
//round off number(whole number no decimal)-method
//const randomNumber = Math.floor(Math.random() * 10 + 1);  // output will be 0 (BUT U WILL MULTIPLY BY 10)
//console.log(randomNumber)
