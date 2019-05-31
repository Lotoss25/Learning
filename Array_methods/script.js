"use strict";
var stringOfNames = "One, Two, Three, Four, Five";
var arr = stringOfNames.split(", ");// переводим строку в массив по разделителю ", "
var stringNew = new Array(4).join("no"); //массив с 4 пустыми елементами, разделенными "no"

console.log(arr);
console.log(stringNew);

stringNew = arr.join("no "); // переводим в строку обратно, разделяем строку по "no "
console.log(stringNew);

delete arr[1];
console.log(arr);

arr.splice(1, 1);
console.log(arr);
arr.splice(1, 0, "Two");
console.log(arr);

var arr1 = arr.slice(0, 2);
console.log(arr1);

arr.sort(function (a, b) { //сортируем от самого большого к меньшему
    if (a > b) return 1;  // так как массив строковый то сортирует в зависимости от рейтинга
    if (a < b) return -1;
})
console.log(arr);
arr.reverse(); //меняет порядок елементов на обратный
console.log(arr);

var newArr = arr.concat(arr1); //создаем новый массив newArr = arr и добавляем к нему arr1
console.log(newArr);
console.log(newArr.indexOf("Two"));

var store = {};
var keys = ["One", "Two", "Three"];

for (var i = 0; i < keys.length; i++) { //коллекция уникальных элементов
    var key = keys[i];
    store[key] = true;
}
if (store["One"] == true) {
    console.log("super");
}
newArr.length = 1;
console.log(newArr);
newArr.length = 5;
console.log(newArr);

var array1 = [1, 2, 3]; //Деструктуризация массива
var [a1, b1] = array1;
console.log(a1, b1);

var args = "1, 23, 34"; //Создаем массив из строки, удаляя при этом пробелы
var arrayOfArgs = args.split(",").map(function (item) {
    return item.trim();
});
console.log(arrayOfArgs);

var ret = arrayOfArgs.some(function (item) {
    return item < 23;
});
console.log(ret);

var sum = arrayOfArgs.reduce(function (sum, item) {
    return +sum + +item;
});
console.log(sum);