"use strict";
let output = "";
let quantity = prompt("Введите количество итераций", "");
for (var i = 0; i < quantity; i++) {
    var numbers = prompt("Введите числа через пробел", "");
    var array = numbers.split(" ");
    var numA = +array[0];
    var numB = +array[1];
    output += (" " + Math.round(numA / numB));
}

output = output.substr(1);
console.log(output);