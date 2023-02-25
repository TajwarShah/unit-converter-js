/*
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");

document.querySelector("#theme-toggle").addEventListener('click', () => {
    document.body.classList.toggle("dark");
})

convertBtn.addEventListener('click' , function (){
    let inputValue = inputEl.value;
    lengthConverter(inputValue);
    volumeConverter(inputValue);
    massConverter(inputValue);
    inputEl.value = ""
    inputEl.style.width = `${defaultInputWidth}px`;
})

function lengthConverter(val){
    const meterValue = val * 3.281;
    const feetValue = val / 3.2811;
    
    let lengthEl = document.getElementById("length-el");
    lengthEl.innerHTML = `${val} meters = ${meterValue.toFixed(3)} feet | ${val} feet = ${feetValue.toFixed(3)} meters`;
}
function volumeConverter(val){
    const gallonValue = val * 0.264 ;
    const literValue = val / 0.264;
    
    let lengthEl = document.getElementById("volume-el");
    lengthEl.innerHTML = `${val} liters = ${gallonValue.toFixed(3)} gallons | ${val} gallons = ${literValue.toFixed(3)} liters`;
}
function massConverter(val){
    const kiloValue = val * 2.204;
    const poundValue = val / 2.204;
    
    let lengthEl = document.getElementById("mass-el");
    lengthEl.innerHTML = `${val} kilos = ${kiloValue.toFixed(3)} pounds | ${val} pounds = ${poundValue.toFixed(3)} kilos`;
}


inputEl.addEventListener('input', function() {
  const valueLength = inputEl.value.length;
  inputEl.style.width = `${valueLength}ch`;
});
