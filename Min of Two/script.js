"use strict";
var arr = [];
let quantity = prompt("Введите количество пар сравниваемых чисел", "");
//вводим цифры и добавляем их к массиву
for (var i = 0; i < quantity; i++) {
    let numbers = prompt("Введите пару чисел через пробел", "");
    arr[i] = [];
    //var array = numbers.split(" ");

    var array = numbers.split(" ").map(function (value) {
        return parseInt(value, 10);
    });
    for (var j = 0; j < 2; j++) {
        arr[i][j] = array[j];
    }
}

function makeIt(arr) {
    var outString = "";
    var out = [];
    for (var i = 0; i < quantity; i++) {
        if (arr[i][0] > arr[i][1]) {
            out[i] = arr[i][1];
        }
        else {
            out[i] = arr[i][0];
        }
    }
    outString = out.join(" ");
    return outString;
}


console.log(makeIt(arr));