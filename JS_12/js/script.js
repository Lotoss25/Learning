"use strict";

const a = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [4, 5, 6],
    ['d', 'e', 'f'],
    [7, 8, 9],
];

let b = [];
for (let i = a.length - 1; i >= 0; i--) {
    for (let j = a[i].length - 1; j >= 0; j--) {
        b = b.concat(a[i][j]);
    }
}

document.querySelector(".out").innerHTML = b;