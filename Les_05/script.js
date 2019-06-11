"use strict";

document.querySelector("#btn-hide").onclick = function () {
    document.querySelector("link").href = "css/style2.css";
    document.querySelector("h5").textContent = "все удалено ;)";
}
document.querySelector("#add-words").onclick = function () {
    document.querySelector("#add-word").innerHTML += " word";
}
document.querySelector("#add-before").onclick = function () {
    document.querySelector("#add-word").insertAdjacentHTML("afterbegin", " word ");
}
document.querySelector("#add-p").onclick = function () {
    document.querySelector("#add-word").insertAdjacentHTML("beforebegin", " word ");
}
document.querySelector("#add-btn").onclick = function () {
    document.querySelector("#add-word").insertAdjacentHTML("beforeend", " word ");
}
document.querySelector("#wipe-btn1").onclick = function () {
    document.querySelector("#add-word").innerHTML = "<b>Hi</b>";
}
document.querySelector("#wipe-btn2").onclick = function () {
    document.querySelector("#add-word").innerText = "<b>Hi</b>";
}
document.querySelector("#wipe-btn3").onclick = function () {
    document.querySelector("#add-word").outerHTML = "<b>Hi</b>";
}
document.querySelector("#wipe-btn4").onclick = function () {
    document.querySelector("#add-word").outerText = "<b>Hi</b>";
}