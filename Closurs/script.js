// //"use strict";

// var currentCount = 1;
// let makeCounter = () => {

//     //() => {
//     return currentCount++;
//     //}

//     //return currentCount;
// }

// var count = makeCounter();

// console.log(count);
// console.log(count);
// console.log(count);
// console.log(count);


function makeCounter() {
    var count = 1;

    function counter() {
        return count++;
    }

    counter.set = function (value) {
        return count = value;
    }
    counter.reset = function () {
        return count = 1;
    }

    return counter;
}

var counter1 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1.set(23));
//console.log(counter1());
counter1.reset();
console.log(counter1());