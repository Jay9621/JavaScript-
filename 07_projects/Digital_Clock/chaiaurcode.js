// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')
const Time = document.getElementById('Time')

setInterval(function(){
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)


