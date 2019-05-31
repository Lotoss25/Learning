"use strict";

var output = "";
var quantity = prompt("Введите количество строк", "");
for (var i = 0; i < quantity; i++) {
    var numbers = prompt(`Введите строку № ${i}`, "");
    var array = numbers.split(" ");
    var numA = +array[0];
    var numB = +array[1];
    var numN = +array[2];
    var out = 0;
    for (var j = 0; j < numN; j++) {
        out += numA + numB * j;
    }
    output += (" " + out);
}
output = output.substr(1);
console.log(output);