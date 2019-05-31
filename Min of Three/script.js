"use strict";

let output = "";
let quantity = prompt("Введите количество раз сравниваемых чисел", "");
for (var i = 0; i < quantity; i++) {
    var numbers = prompt("Введите три числа через пробел", "");
    var array = numbers.split(" ");
    var numA = +array[0];
    var numB = +array[1];
    var numC = +array[2];
    if (numA > numB || numA > numC) {
        if (numB > numC) {
            output += (" " + numC);
        }
        else {
            output += (" " + numB);
        }
    }
    else {
        output += (" " + numA);
    }
}
output = output.substr(1);
console.log(output);

