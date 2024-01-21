const input = require('readline-sync');
let str = "LaunchCode";
console.log(str);
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let strNew = str.split("Lau").reverse().join("Lau");
console.log(strNew);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The first phrase was ${str}, the modified phrase is ${strNew}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Pick a number: ");
console.log(userInput);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userInput >= 0 && userInput <= 9){
    let firstStr = str.slice(0, userInput);
    let secondStr = str.slice(userInput);
    console.log(secondStr + firstStr)
} else {
    userInput = 3;
    let firstStr = str.slice(0, userInput);
    let secondStr = str.slice(userInput);
    console.log(`Invalid input. Defaulting to three characters: ${(secondStr + firstStr)}`);
}