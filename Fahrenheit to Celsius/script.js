"use strict";

var numbers = prompt("Введите строку", "");
var array = numbers.split(" ").map(function (value) {
    return parseInt(value, 10);
});
var quantity = array[0];
array.shift();
var output = "";
for (var i = 0; i < quantity; i++) {
    output += (" " + Math.round((array[i] - 32) * 5 / 9));
}
output = output.substr(1);
console.log(output);
