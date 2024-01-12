// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = 850000;
let fuelTempCelcius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftoff = true

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Crew accounted for.")
} else {
    console.log("Crew not cleared for liftoff.")
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("Crew ready.")
} else {
    console.log ("Crew not ready.")
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= maximumMassLimit) {
    console.log("Shuttle mass within parameters.")
} else {
    console.log("Shuttle maximum mass exceeded.")
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelcius <= -150 || fuelTempCelcius >= -300) {
    console.log("Fuel temperature safe.")
} else {
    console.log("Fuel temperature unsafe, please exit the shuttle.")
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("Shuttle fueled.")
} else {
    console.log("Shuttle fuelling incomplete.")
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("Weather clear.")
} else {
    console.log ("Weather unsafe, aborting launch.")
}
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftoff === true) {
    console.log("All systems green. Initiating shuttle launch sequence.")
} else {
    console.log("Launch aborted.")
}
