"use strict";

//инициализируем все кнопки
let hideBlock = document.querySelector("#btn1");
let showBlock = document.querySelector("#btn2");
let addBtn = document.querySelector("#btn3");
let helloBtn = document.querySelector("#btn4");
let doubleBtn = document.querySelector("#btn5");
let hideBtn = document.querySelector("#btn6");
let clickBtn = document.querySelector("#btn7");

//<div>
let block = document.querySelector("#modal");

//первое задание
function hideModal() {
    block.style.display = "none";
}
function showModal() {
    block.style.display = "block";
}
hideBlock.onclick = hideModal;
showBlock.onclick = showModal;

//второе задание
function add() {
    console.log(21414252 + 21342342354);
}
addBtn.onclick = add;

// третье задание
function hello() {
    alert("Hello!!!");
}
helloBtn.onclick = hello;

// четвертое задание
function double() {
    add();
    hello();
}
doubleBtn.onclick = double;

//пятое задание
function hide() {
    hideBtn.hidden = "true";
}
hideBtn.onclick = hide;

//шестое задание
function click() {
    clickBtn.innerHTML = "не нажимать!";
}
clickBtn.onclick = click;