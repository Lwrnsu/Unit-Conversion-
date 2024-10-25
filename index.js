/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("button-el");
const lengthRes = document.getElementById("length-result");
const volumeRes = document.getElementById("volume-result");
const massRes = document.getElementById("mass-result");
buttonEl.addEventListener("click", function() {
  lengthResult()
  volumeResult()
  massResult()
  console.log("the button was clicked")
})
function lengthResult () {
  const lengthToFeet = (Math.round(inputEl.value * 3.281 * 100) / 100).toFixed(2);
  const feetToLength = (Math.round(inputEl.value / 3.281 * 100) / 100).toFixed(2);
  lengthRes.innerHTML = `
    <p>${inputEl.value} meters = ${lengthToFeet} feet | 
    ${inputEl.value} feet = ${feetToLength} meters      
    </p>
  `
}
function volumeResult () {
  const litersToGallons = (Math.round(inputEl.value * 0.264 * 100) / 100).toFixed(2);
  const gallonsToLiters = (Math.round(inputEl.value / 0.264 * 100) / 100).toFixed(2);
  volumeRes.innerHTML = `
    <p>${inputEl.value} liters = ${litersToGallons} gallons | 
    ${inputEl.value} gallons = ${gallonsToLiters} liters       
    </p>
  `
}
function massResult () {
  const kilosToPounds = (Math.round(inputEl.value * 2.204 * 100) / 100).toFixed(2);
  const poundsToKilos = (Math.round(inputEl.value / 2.204 * 100) / 100).toFixed(2);
  massRes.innerHTML = `
    <p>${inputEl.value} kilos = ${kilosToPounds} pounds | 
    ${inputEl.value} feet = ${poundsToKilos} kilos      
    </p>
  `
}