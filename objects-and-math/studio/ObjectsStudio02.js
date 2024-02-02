let idNumbers = [291, 414, 503, 599, 796, 890];
// Code your orbitCircumference function here:
function calculateOrbitCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  return Math.round(circumference);
}
function missionDuration(orbitsCompleted, radius = 2000, orbitalSpeed = 28000) {
  const distance = calculateOrbitCircumference(radius) * orbitsCompleted;
  const time = distance / orbitalSpeed;
  const roundedTime = time.toFixed(2);

  return parseFloat(roundedTime); // Convert the rounded time back to a floating-point number
}
const orbitsCompleted = 5; // Replace with the desired number of orbits
const orbitRadius = 2000; // Default radius
const orbitalSpeed = 28000; // Default orbital speed

// Code your missionDuration function here:
const duration = missionDuration(orbitsCompleted, orbitRadius, orbitalSpeed);
console.log(`The mission will travel ${calculateOrbitCircumference(orbitRadius)} km around the planet, and it will take ${duration} hours to complete.`);


// Copy/paste your selectRandomEntry function here:
function selectRandomEntry() {
  const randomIndex = Math.floor(Math.random() * idNumbers.length);
  const randomEntry = idNumbers[randomIndex];
  return randomEntry;
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, orbitRadius = 2000, orbitalSpeed = 28000) {
  // Call missionDuration to calculate the spacewalk time
  const oxygenConsumptionRate = 0.035;
  const spacewalkTime = missionDuration(3, orbitRadius, orbitalSpeed);
  const oxygenConsumed = spacewalkTime * oxygenConsumptionRate;
  const roundedOxygenConsumed = oxygenConsumed.toFixed(3);
  return `${candidate.name} will perform the spacewalk, which will last ${spacewalkTime} hours and require ${roundedOxygenConsumed} kg of oxygen.`;
}
const randomCrewMember = selectRandomEntry();
const result = oxygenExpended(randomCrewMember);
console.log(result);

// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];
 