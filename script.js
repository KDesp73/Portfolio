//Variable Declaration


const langSwitch = document.getElementById("langSwitch");
const themeSwitch = document.querySelector("#themeSwitch");
//let langSwitchStatus = langSwitch.addEventListener('input', 'checked');
//let themeSwitchStatus = themeSwitch.addEventListener('input', 'checked');

let langSwitchStatus = langSwitch.addEventListener('input', 'checked');
//let themeSwitchStatus = themeSwitch.addEventListener('input', 'checked');

var themeDARK = false;
var langGR = false;

//Functions
function langFunc(){

}

function themeFunc(){
    if(themeDARK == false){
        var element = document.body;
        element.classList.toggle("dark-mode");
        themeDARK = true;
    }
    else{
        var element = document.body;
        element.classList.toggle("dark-mode");
        themeDARK = false;
    }
}

while(themeDARK){
    var element = document.body;
    element.classList.toggle("dark-mode");
}
