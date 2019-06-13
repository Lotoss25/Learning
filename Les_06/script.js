"use strict";

document.querySelector("#btnAll").onclick = function () {
    console.log(document.querySelector(".text-input").value);
    console.log(document.querySelector(".date-input").value);
    console.log(document.querySelector(".range-input").value);
    console.log(document.querySelector(".pass-input").value);
    console.log(document.querySelector("#checkbox-input1").value);
    console.log(document.querySelector("#checkbox-input2").checked);
    console.log(document.querySelector("#checkbox-input3").type);
}

//первое задание
document.querySelector("#btnColor").onclick = function () {
    //     document.body.innerHTML += `<style>body{background: ${document.querySelector(".color-input").value}}</style>`;
    document.body.style.background = document.querySelector(".color-input").value;
}

//второе задание
document.querySelector("#btnChange").onclick = function () {
    document.body.style.background = document.querySelector(".color-input1").value;
    document.body.style.color = document.querySelector(".color-input2").value;
}
document.querySelector("#btnReverse").onclick = function () {
    document.body.style.background = ""
    document.body.style.color = ""
}

// //третье задание
document.querySelector(".font-input").onclick = function () {
    document.body.style.fontSize = document.querySelector(".font-input").value + "px";
}

//четвертое задание
document.querySelector(".font-input").oninput = function () {
    document.querySelector(".span-input").style.fontSize = document.querySelector(".font-input").value + "px";
}

//пятое задание
let r = "ff", g = "ff", b = "ff";
document.querySelector(".rgb-input-r").oninput = function () {
    let rR = +document.querySelector(".rgb-input-r").value;
    r = rR.toString(16);
    document.querySelector(".span-r").innerHTML = rR;
    document.querySelector(".span-out").innerHTML = "#" + r + g + b;
    document.querySelector(".rgb-output").style.background = "#" + r + g + b;
}
document.querySelector(".rgb-input-g").oninput = function () {
    let gR = +document.querySelector(".rgb-input-g").value;
    g = gR.toString(16);
    document.querySelector(".span-g").innerHTML = gR;
    document.querySelector(".span-out").innerHTML = "#" + r + g + b;
    document.querySelector(".rgb-output").style.background = "#" + r + g + b;
}
document.querySelector(".rgb-input-b").oninput = function () {
    let bR = +document.querySelector(".rgb-input-b").value;
    b = bR.toString(16);
    document.querySelector(".span-b").innerHTML = bR;
    document.querySelector(".span-out").innerHTML = "#" + r + g + b;
    document.querySelector(".rgb-output").style.background = "#" + r + g + b;
}
