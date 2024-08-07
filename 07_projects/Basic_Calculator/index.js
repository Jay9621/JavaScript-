const buttons = document.querySelectorAll("button")
const InputField = document.getElementById("result")

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        const buttonValue = buttons[i].textContent;
        if (buttonValue === "C") {
            clearResult();
            
        } else if (buttonValue === "="){
            calculateResult();
            
        } else {
            appenValue(buttonValue);

        }
    })
    
}

function clearResult(){
    InputField.value = "";
}

function calculateResult(){
    InputField.value = eval(InputField.value);
}

function appenValue(buttonValue){
    InputField.value += buttonValue;
}