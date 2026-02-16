/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("num-input");
let convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function() {
    console.log("here");
    if (isNaN(inputEl.value)) {
        alert("Enter a valid number!");
    } else {
        let value = Number(inputEl.value);
        let lengthInfo = `${value} meters = ${(value * 3.281).toFixed(3)} feet | ${value} feet = ${(value / 3.281).toFixed(3)} meters`;
        let volumeInfo = `${value} liters = ${(value * 0.264).toFixed(3)} gallons | ${value} gallons = ${(value / 0.264).toFixed(3)} liters`;
        let massssInfo = `${value} kilos = ${(value * 2.204).toFixed(3)} pounds | ${value} pounds = ${(value / 2.204).toFixed(3)} kilos`;

        document.getElementById("length-info").textContent = lengthInfo;
        document.getElementById("volume-info").textContent = volumeInfo;
        document.getElementById("mass-info").textContent = massssInfo;
    }
})