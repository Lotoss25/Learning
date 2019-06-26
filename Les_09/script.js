"use strict";



//Первое задание
document.querySelector(".first-text").onkeypress = function (e) {
    if (e.keyCode >= 97 && e.keyCode <= 122) {
        if (e.shiftKey == true) {
            return false;
        }
    }
    else {
        return false;
    }
}

//Второе задание
let left = 0;
let up = 0;
let deg = 0;
document.onkeydown = function (e) {
    let sq = document.querySelector(".sq")
    if (e.keyCode == 68) {
        if (left < 150) {
            left++;
            sq.style.marginLeft = left + "px";
        }
    }
    if (e.keyCode == 65) {
        if (left > 0) {
            left--;
            sq.style.marginLeft = left + "px";
        }
    }
    if (e.keyCode == 87) {
        if (up > 0) {
            up--;
            sq.style.marginTop = up + "px";
        }
    }
    if (e.keyCode == 83) {
        if (up < 150) {
            up++;
            sq.style.marginTop = up + "px";
        }
    }
    if (e.keyCode == 37) {
        deg += 45;
        sq.style.webkitTransform = 'rotate(' + deg + 'deg)';
        sq.style.mozTransform = 'rotate(' + deg + 'deg)';
        sq.style.msTransform = 'rotate(' + deg + 'deg)';
        sq.style.oTransform = 'rotate(' + deg + 'deg)';
        sq.style.transform = 'rotate(' + deg + 'deg)';
    }
    if (e.keyCode == 39) {
        deg -= 45;
        sq.style.webkitTransform = 'rotate(' + deg + 'deg)';
        sq.style.mozTransform = 'rotate(' + deg + 'deg)';
        sq.style.msTransform = 'rotate(' + deg + 'deg)';
        sq.style.oTransform = 'rotate(' + deg + 'deg)';
        sq.style.transform = 'rotate(' + deg + 'deg)';
    }
}

//Третье задание
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

let randomText = document.querySelector(".random-text");
randomText.onkeydown = function () {
    let array = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", 'x', "c", "v", "b", "n", "m", "1", '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let rand = randomInteger(1, 35);
    randomText.value += array[rand];

    return false;
}

//Четвертое задание
let replaceText = document.querySelector(".replace-text");
replaceText.onkeypress = function (e) {
    let array1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "\\", "z", 'x', "c", "v", "b", "n", "m", ",", ".", "/"];
    for (let i = 0; i < array1.length; i++) {
        if (e.key === array1[i] && e.key !== "]" && e.key !== "\\" && e.key !== "/") {
            replaceText.value += array1[i + 1];
        }
    }
    if (e.key === array1[11]) {
        replaceText.value += array1[0];
    }
    else if (e.key === "\\") {
        replaceText.value += "a";
    }
    else if (e.key === "/") {
        replaceText.value += "z";
    }

    return false;
}