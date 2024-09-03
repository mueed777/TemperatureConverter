const inputText = document.getElementById("inputText");
const cToF = document.getElementById("cToF");
const fToC = document.getElementById("fToC");
const button = document.getElementById("button");
const result = document.getElementById("p");
const result2 = document.getElementById("p2");
let isRunning = false;
let inputTextToNumber = Number(inputText.value);


button.onclick = buttonTapped;

// button action
function buttonTapped() {
    let convertInputToNumber = Number(inputText.value);
    convertInputToNumber = convertInputToNumber.toFixed(1);

    if (isNaN(convertInputToNumber) || inputText.value.length == 0) {
        window.alert(`Please enter a number! 😡`);
    } else {
        if(cToF.checked) {
            let f = convertToF(convertInputToNumber);

            result2.textContent = `${convertInputToNumber} is entered`
            result.textContent = `${f} degree Fahrenheit`;
    
        } else if (fToC.checked){
            let c = converToC(convertInputToNumber);
            result.textContent = `${c} degree`;

            result2.textContent = `${convertInputToNumber} is entered`
            result.textContent = `${c} degree Celsius`;
        } else {
            window.alert(`Please select an option to convert 🥸`);
            
        }
    }
}

function convertToF(inputNumber) {
    // let convert = inputNumber * ((9 / 5) + 32);
    let convert = (inputNumber * 9 / 5) + 32;
    return convert.toFixed(1);
}

function converToC(inputNumber) {
    let convert = (inputNumber - 32) * 5 / 9;
    return convert.toFixed(1);
}