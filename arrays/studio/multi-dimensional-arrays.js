const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(",");
console.log(foodArray.sort());
let equipmentArray = equipment.split(",");
console.log(equipmentArray.sort());
let petsArray = pets.split(",");
console.log(petsArray.sort());
let sleepAidsArray = sleepAids.split(",");
console.log(sleepAidsArray.sort());
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [];
cargoHold.push(foodArray);
cargoHold.push(equipmentArray);
cargoHold.push(petsArray);
cargoHold.push(sleepAidsArray);
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userInput = input.question("Pick a cabinet number: ");
console.log(userInput);
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userInput >= 0 && userInput <= 3){
    let cabinetSelect = cargoHold.slice[userInput];
    console.log(`Selected cabinet: ${(cabinetSelect)}`)
} else {
    console.log("Invalid Input.");
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
