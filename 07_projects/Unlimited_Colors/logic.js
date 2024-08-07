// generate a random color

const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

console.log(randomColor());

let intervalID;

const changeColorStart = function() {

    if(!intervalID){
        intervalID = setInterval(changeBgColor, 1000);
    }
    

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const changeColorStop = function() {
    console.log("Stop color changed");
    clearInterval(intervalID);
    intervalID = null; // to free some memeory or save memory
};

document.querySelector('#start').addEventListener('click', changeColorStart);
document.querySelector('#stop').addEventListener('click', changeColorStop);