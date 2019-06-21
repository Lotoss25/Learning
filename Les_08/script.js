"use strict";

//первая задача
document.querySelector(".ondblclick").ondblclick = function () {
    console.log("ondblclick");
}

//вторая задача
document.querySelector("html").oncontextmenu = function () {
    return false;
}

//третья задача
document.querySelector(".onmouseenter").onmouseenter = function () {
    document.querySelector(".onmouseenter").style.background = 'url("https://cdn1.iconfinder.com/data/icons/hawcons/32/698928-icon-95-folder-64.png")';
}

document.querySelector(".onmouseenter").onmouseleave = function () {
    document.querySelector(".onmouseenter").style.background = 'url("https://cdn1.iconfinder.com/data/icons/hawcons/32/698927-icon-94-folder-64.png")';
}

//четвертая задача
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

document.querySelector(".first").onmouseenter = function () {
    let r = parseInt(randomInteger(0, 255), 16);
    let g = parseInt(randomInteger(0, 255), 16);
    let b = parseInt(randomInteger(0, 255), 16);
    document.querySelector(".first").style.background = "#" + r + g + b;
}
document.querySelector(".second").onmouseenter = function () {
    let r = parseInt(randomInteger(0, 255), 16);
    let g = parseInt(randomInteger(0, 255), 16);
    let b = parseInt(randomInteger(0, 255), 16);
    document.querySelector(".second").style.background = "#" + r + g + b;
}
document.querySelector(".third").onmouseenter = function () {
    let r = parseInt(randomInteger(0, 255), 16);
    let g = parseInt(randomInteger(0, 255), 16);
    let b = parseInt(randomInteger(0, 255), 16);
    document.querySelector(".third").style.background = "#" + r + g + b;
}
//вопрос - как применить цвет фона ко всему блоку сразу ?
