"use strict";

var output = "";
var quantity = prompt("Введите количество возможных треугольников", "");
for (var i = 0; i < quantity; i++) {
    var numbers = prompt(`Введите стороны треугольника ${i + 1}`, "");
    var array = numbers.split(" ");
    var A = +array[0];
    var B = +array[1];
    var C = +array[2];
    if (A + B > C && B + C > A && A + C > B) {
        output += (" " + 1);
    }
    else {
        output += (" " + 0);
    }
}
output = output.substr(1);
console.log(output);