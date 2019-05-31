"use strict";
var arr = [1, -2, 3];
var array = arr.map(function (leng) {
    return leng + 1;
})
var lessArray = arr.filter(function (number) {
    return number < 3;
})
var reduceArray = arr.reduce((function (sum, current) {
    return sum + current;
}), 0)
alert(array);
alert(lessArray);
alert(arr.every(function (number) {
    return number > 0;
}))
alert(arr.some(function (number) {
    return number > 0;
}))
alert(reduceArray);