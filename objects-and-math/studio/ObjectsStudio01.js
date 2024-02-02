let idNumbers = [291, 414, 503, 599, 796, 890];


function selectRandomEntry() {
  const randomIndex = Math.floor(Math.random() * idNumbers.length);
  const randomEntry = idNumbers[randomIndex];
  return randomEntry;
}
function selectThreeRandomEntries() {
  let selectedEntries = [];
  while (selectedEntries.length < 3) {
    const randomEntry = selectRandomEntry();
    if (!selectedEntries.includes(randomEntry)) {
      selectedEntries.push(randomEntry);
    }
  }

  return selectedEntries;
}
// Call the function to select three unique random ID numbers




// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

const threeRandomIDs = selectThreeRandomEntries();
// Print the result
console.log("Three Random ID Numbers:", threeRandomIDs);

// Code your buildCrewArray function here:
// Function to select animals for the space mission based on lucky ID numbers
function selectAnimalsForSpaceMission(selectedIDs, candidates) {
  let crew = [];
  for (let i = 0; i < candidates.length; i++) {
    if (selectedIDs.includes(candidates[i].astronautID)) {
      crew.push(candidates[i]);
    }
  }
  return crew;
}
let selectedIDs = [414, 503, 796]; // Replace with the randomly selected ID numbers
let selectedCrew = selectAnimalsForSpaceMission(selectedIDs, animals);
console.log(`${selectedCrew.map(animal => animal.name).join(', ')} are going to space!`);


