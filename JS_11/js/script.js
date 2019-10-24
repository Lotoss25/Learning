"use strict";

let arr1 = [];
document.querySelector(".u-2_push").onclick = function () {
    let data = document.querySelector(".u-1").value;
    arr1.push(data);
    document.querySelector(".u-1").value = "";
    document.querySelector(".out-1").innerHTML = arr1;
}

let arr2 = [1, 2, 3];
document.querySelector(".button-unshift").onclick = function () {
    let data = +document.querySelector(".input-text").value;
    let arrNew = [];
    arrNew.push(data);
    arrNew = arrNew.concat(arr2);
    arr2 = arrNew;
    document.querySelector(".out-2").innerHTML = arrNew;
}