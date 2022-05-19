const pad1 = document.getElementById("pad1");
const pad2 = document.getElementById("pad2");
const pad3 = document.getElementById("pad3");
const pad4 = document.getElementById("pad4");
const pad5 = document.getElementById("pad5");
const pad6 = document.getElementById("pad6");
const pad7 = document.getElementById("pad7");
const pad8 = document.getElementById("pad8");
const pad9 = document.getElementById("pad9");
const score = document.getElementById("score");
const startButton = document.getElementById("start");
const next = document.getElementById("next");



function pad1Clicked(){
    console.log("Pad 1 Pressed");

    playerSeq[index] = 1;
    index++;
}
function pad2Clicked(){
    console.log("Pad 2 Pressed");

    playerSeq[index] = 2;
    index++;
}
function pad3Clicked(){
    console.log("Pad 3 Pressed");

    playerSeq[index] = 3;
    index++;
}
function pad4Clicked(){
    console.log("Pad 4 Pressed");

    playerSeq[index] = 4;
    index++;
}
function pad5Clicked(){
    console.log("Pad 5 Pressed");

    playerSeq[index] = 5;
    index++;
}
function pad6Clicked(){
    console.log("Pad 6 Pressed");

    playerSeq[index] = 7;
    index++;
}
function pad7Clicked(){
    console.log("Pad 7 Pressed");

    playerSeq[index] = 7;
    index++;
}
function pad8Clicked(){
    console.log("Pad 8 Pressed");

    playerSeq[index] = 8;
    index++;
}
function pad9Clicked(){
    console.log("Pad 9 Pressed");

    playerSeq[index] = 9;
    index++;
}


let seq = [];
let playerSeq = [];
let index = 0;
let toggleDelay = 1000; // 1-second
let padDelay = 1500;
let levelNum = 1;



function add(){
    score.innerHTML = parseInt(score.textContent) + 1;
}
function generateSeq(length){
    for (var i = 0; i < length; i++) {
        seq[i] = Math.floor(Math.random() * 9 + 1);
    }
}
function logSeq(arr, id){
    for (var i = 0; i < length; i++) {
        console.log(id + "[" + i + "] = " + arr[i]);
    }
}
function clearSeq(arr) {
    arr = [];
}
function togglePads(i, padDelay, length){
    if(i == length){
        return;
    }

    switch (seq[i]) {
        case 1:
            pad1.setAttribute('style', 'background-color: #23232e');
            setTimeout(function() {
                pad1.setAttribute('style', 'background-color: #C1292E');
            }, toggleDelay);
            setTimeout(()=>{
                togglePads(i+1, padDelay, length);
            }, padDelay);
            break;
        case 2:
            pad2.setAttribute('style', 'background-color: #23232e');
            setTimeout(function() {
                pad2.setAttribute('style', 'background-color: #C1292E');
            }, toggleDelay);
            setTimeout(()=>{
                togglePads(i+1, padDelay, length);
            }, padDelay);
            break;
        case 3:
            pad3.setAttribute('style', 'background-color: #23232e');
            setTimeout(function() {
                pad3.setAttribute('style', 'background-color: #C1292E');
            }, toggleDelay);
            setTimeout(()=>{
                togglePads(i+1, padDelay, length);
            }, padDelay);
            break;
        case 4:
            pad4.setAttribute('style', 'background-color: #23232e');
            setTimeout(function() {
                pad4.setAttribute('style', 'background-color: #C1292E');
            }, toggleDelay);
            setTimeout(()=>{
                togglePads(i+1, padDelay, length);
            }, padDelay);
            break;
        case 5:
            pad5.setAttribute('style', 'background-color: #23232e');
            setTimeout(function() {
                pad5.setAttribute('style', 'background-color: #C1292E');
            }, toggleDelay);
            setTimeout(()=>{
                togglePads(i+1, padDelay, length);
            }, padDelay);
            break;
        case 6:
            pad6.setAttribute('style', 'background-color: #23232e');
            setTimeout(function() {
                pad6.setAttribute('style', 'background-color: #C1292E');
            }, toggleDelay);
            setTimeout(()=>{
                togglePads(i+1, padDelay, length);
            }, padDelay);
            break;
        case 7:
            pad7.setAttribute('style', 'background-color: #23232e');
            setTimeout(function() {
                pad7.setAttribute('style', 'background-color: #C1292E');
            }, toggleDelay);
            setTimeout(()=>{
                togglePads(i+1, padDelay, length);
            }, padDelay);
            break;
        case 8:
            pad8.setAttribute('style', 'background-color: #23232e');
            setTimeout(function() {
                pad8.setAttribute('style', 'background-color: #C1292E');
            }, toggleDelay);
            setTimeout(()=>{
                togglePads(i+1, padDelay, length);
            }, padDelay);
            break;
        case 9:
            pad9.setAttribute('style', 'background-color: #23232e');
            setTimeout(function() {
                pad9.setAttribute('style', 'background-color: #C1292E');
            }, toggleDelay);
            setTimeout(()=>{
                togglePads(i+1, padDelay, length);
            }, padDelay);
            break;
    }
}
function checkInput(){
    for (var i = 0; i < seq.length; i++) {
        if(playerSeq[i] != seq[i])
            return false;
    }
    return true;
}
function lockArr(arr){

}

function level(numOfPads, padDelay, timeleft){
    levelDone = false;
    generateSeq(numOfPads);
    logSeq(seq, "seq");
    togglePads(0, padDelay, numOfPads);

    let timer = setInterval(()=>{
        if(timeleft <= 0){
            clearInterval(timer);
            if(checkInput()){
                logSeq(playerSeq, "playerSeq");
                add();
                levelNum++;
                next.setAttribute("style", "visibility: visible");
            }
            else {
                youLost();
            }
            levelDone = true;
        }
        else {
            timeleft -= 1;
        }
    }, 1000);

}

function format(){
    index = 0;
    clearSeq(seq);
    clearSeq(playerSeq);
}

function youWon(){
    document.querySelector("main").setAttribute("style", "z-index: 3");
    document.querySelector("main").setAttribute("style", "background-color: white");
    document.querySelector("main").setAttribute("style", "font-size: 10rem");
    document.querySelector("main").setAttribute("style", "font-weight: bold");
    document.querySelector("main").innerHTML = "You Won!"
}
function youLost(){
    document.querySelector("main").setAttribute("style", "z-index: 3");
    document.querySelector("main").setAttribute("style", "background-color: white");
    document.querySelector("main").setAttribute("style", "font-size: 10rem");
    document.querySelector("main").setAttribute("style", "font-weight: bold");
    document.querySelector("main").innerHTML = "You Lost..."
}

function nextLevel(){
    next.setAttribute("style", "visibility: hidden");
    switch (levelNum) {
        case 2:
            format();
            level(4, 1450, 10);
            break;
        case 3:
            format();
            level(5, 1400, 10);
            break;
        case 4:
            format();
            level(6, 1350, 12);
            break;
        case 5:
            format();
            level(7, 1300, 14);
            break;
        case 6:
            format();
            level(8, 1250, 16);
            break;
        case 7:
            format();
            level(9, 1200, 16);
            break;
        case 8:
            format();
            level(10, 1150, 20);
            break;
        case 9:
            format();
            level(11, 1100, 20);
        case 10:
            format();
            youWon();
            break;
        default:

    }
}

function __init__(){
    let scoreSet = 0;
    let levelDone = false;

    level(3, 1500, 10);
}
