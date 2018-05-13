//DOM Ready

let switch_frame = document.getElementById('switch');
let btn = document.getElementById('btn');
let poweron = document.getElementById('poweron');
let poweroff = document.getElementById('poweroff');
let on = false;

switch_frame.addEventListener('click', function () {
    if(on == false) {

        btn.style.transform = "translateX(70px)";
        poweron.style.visibility = "visible";
        poweroff.style.visibility = "hidden";
        btn.style.background = "darkseagreen";
        on = !on;
    }
    else{
        btn.style.transform = "translateX(0)";
        poweron.style.visibility = "hidden";
        poweroff.style.visibility = "visible";
        btn.style.background = "#3399ff";
        on = !on;
    }
});