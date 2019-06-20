"use strict";

//первое задание
for (let i = 0; i <= 100; i++) {
    document.querySelector("#first").innerHTML += " " + i;
}

//второе задание
for (let i = 0; i <= 101; i++) {
    if (i % 2 == 0)
        document.querySelector("#second").innerHTML += " " + i;
}

//третье задание
for (let i = 200; i >= 0; i--) {
    document.querySelector("#third").innerHTML += " " + i;
}

//четвертое задание
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
document.querySelector("#fourth").innerHTML = sum;

//пятое задание
document.querySelector("#btn-exp").onclick = function () {
    let exp = document.querySelector("#num-input").value;
    for (let i = 1; i < +document.querySelector("#exp-input").value; i++) {
        exp *= document.querySelector("#num-input").value;
    }
    document.querySelector("#output-exp").innerHTML = exp;
}

//шестое задание
for (let i = 1; i <= 9; i++) {
    let table = i * 7;
    document.querySelector("#sixth").innerHTML += "<p>" + i + " * 7 = " + table + "</p>";
}

//седьмое задание
let all = 1;
for (let i = 1; i <= 50; i++) {
    all *= i;
    document.querySelector("#seventh").innerHTML = all;
}

//восьмое задание
document.querySelector("#btn-spec").onclick = function () {
    for (let i = 1000; i <= 2000; i++) {
        document.querySelector("#eighth").innerHTML += " " + i + " = " + "&#" + i;
    }
}

//девятое задание
document.querySelector("#rename-paragraphs").onclick = function () {
    let p = document.querySelectorAll(".main p");
    for (let i = 0; i < p.length; i++) {
        p[i].insertAdjacentHTML("afterbegin", i + 1 + " ");
    }
}

//Десятое задание
let signBtn = document.querySelector("#btn-sign");
signBtn.onclick = function () {
    let day = parseInt(document.querySelector("#input-day").value);
    let month = parseInt(document.querySelector("#input-month").value);
    if (isNaN != day && isNaN != month && month > 0 && month <= 12 && day > 0 && day <= 31) {
        let array = ["Козерог", "Водолей", "Рыбы", "Овен", "Телец", "Близнецы", "Рак", "Лев", "Дева", "Весы", "Скорпион", "Стрелец"];
        switch (month) {
            case 1:
                if (day <= 20 && day > 0) {
                    signBtn.innerHTML = array[0];
                }
                if (day > 20 && day <= 31) {
                    signBtn.innerHTML = array[1];
                }
                break;
            case 2:
                if (day <= 19 && day > 0) {
                    signBtn.innerHTML = array[1];
                }
                //тут можно еще проверку на высокосный год сделать, но это будет уже слишком ;)
                if (day > 19 && day <= 29) {
                    signBtn.innerHTML = array[2];
                }
                break;
            case 3:
                if (day <= 20 && day > 0) {
                    signBtn.innerHTML = array[2];
                }
                if (day > 20 && day <= 31) {
                    signBtn.innerHTML = array[3];
                }
                break;
            case 4:
                if (day <= 20 && day > 0) {
                    signBtn.innerHTML = array[3];
                }
                if (day > 20 && day <= 30) {
                    signBtn.innerHTML = array[4];
                }
                break;
            case 5:
                if (day <= 21 && day > 0) {
                    signBtn.innerHTML = array[4];
                }
                if (day > 21 && day <= 31) {
                    signBtn.innerHTML = array[5];
                }
                break;
            case 6:
                if (day <= 21 && day > 0) {
                    signBtn.innerHTML = array[5];
                }
                if (day > 21 && day <= 30) {
                    signBtn.innerHTML = array[6];
                }
                break;
            case 7:
                if (day <= 22 && day > 0) {
                    signBtn.innerHTML = array[6];
                }
                if (day > 22 && day <= 31) {
                    signBtn.innerHTML = array[7];
                }
                break;
            case 8:
                if (day <= 21 && day > 0) {
                    signBtn.innerHTML = array[7];
                }
                if (day > 21 && day <= 31) {
                    signBtn.innerHTML = array[8];
                }
                break;
            case 9:
                if (day <= 23 && day > 0) {
                    signBtn.innerHTML = array[8];
                }
                if (day > 23 && day <= 30) {
                    signBtn.innerHTML = array[9];
                }
                break;
            case 10:
                if (day <= 23 && day > 0) {
                    signBtn.innerHTML = array[9];
                }
                if (day > 23 && day <= 31) {
                    signBtn.innerHTML = array[10];
                }
                break;
            case 11:
                if (day <= 22 && day > 0) {
                    signBtn.innerHTML = array[10];
                }
                if (day > 22 && day <= 31) {
                    signBtn.innerHTML = array[11];
                }
                break;
            case 12:
                if (day <= 22 && day > 0) {
                    signBtn.innerHTML = array[11];
                }
                if (day > 22 && day <= 31) {
                    signBtn.innerHTML = array[0];
                }
                break;

        }
    }
    else {
        alert("Введите цифровое значение дня и месяца рождения");
    }
}

//Одинадцатое задание
let spans = document.querySelectorAll("span");
for (let i = 0; i < spans.length; i++) {
    spans[i].style.background = "yellow";
}

//Двенадцатое задание
let ps = document.querySelectorAll("p");
document.querySelector("#paragraphs-span").innerHTML = ps.length;

//Тринадцатое задание
let arrayOfUnit = [1, 0, 0, 0, 0, 0];
function out() {
    document.querySelector("#output-array").innerHTML = "[" + arrayOfUnit + "]";
}
out();
let i = 0
document.querySelector("#btn-array").onclick = function () {

    if (i < arrayOfUnit.length - 1) {
        arrayOfUnit[i] = 0;
        arrayOfUnit[i + 1] = 1;
        i++;
    }


    out();
}

//Четырнадцатое задание
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
let arrayOfNumbers = [];
let num = 0;
for (let i = 0; i < 5; i++) {
    arrayOfNumbers[i] = randomInteger(-100, 100);
    if (arrayOfNumbers[i] < 0) {
        num += 1;
        document.querySelector("#minnumbers-output").innerHTML = num;
    }
}
document.querySelector("#arrayofnumbers-output").innerHTML = "[" + arrayOfNumbers + "]";

//Пятнадцатое задание
let arrayOfNumbers15 = [];
for (let i = 0; i < 5; i++) {
    arrayOfNumbers15[i] = randomInteger(-100, 100);
    if (arrayOfNumbers15[i] < 0) {
        document.querySelector("#minnumbers15-output").innerHTML += arrayOfNumbers15[i] + " ";
    }
}
document.querySelector("#arrayofnumbers15-output").innerHTML = "[" + arrayOfNumbers15 + "]";

//Шестнадцатое задание
let arrayOfUnits = [];
document.querySelector("#btn-arrayofunits").onclick = function () {
    let arrayNum = +document.querySelector("#array-input").value;
    for (let i = 0; i < arrayNum; i++) {
        arrayOfUnits[i] = 1;
    }
    document.querySelector("#arrayofunits-span").innerHTML = "[" + arrayOfUnits + "]";
}

//Семнадцатое задание
let randomArray = [];
document.querySelector("#btn-randomarray").onclick = function () {
    let arrayNum = +document.querySelector("#randomarray-input").value;
    for (let i = 0; i < arrayNum; i++) {
        arrayOfUnits[i] = randomInteger(0, 100);
    }
    document.querySelector("#randomarray-span").innerHTML = "[" + arrayOfUnits + "]";
}

//Восемнадцатое задание
let arrayOfThings = [10, "20", 30, "40", "50", 60, "70", 80, 90];
let secondArray = [];
let j = 0;
for (let i = 0; i < arrayOfThings.length; i++) {

    if (typeof arrayOfThings[i] == "number") {
        secondArray[j] = arrayOfThings[i];
        j++;
    }
}
document.querySelector("#array1-span").innerHTML = '[10, "20", 30, "40", "50", 60, "70", 80, 90]';
document.querySelector("#array2-span").innerHTML = secondArray;

//Девятнадцатое задание
let arrayMax = [];
let max = -100;
for (let i = 0; i < 5; i++) {
    arrayMax[i] = randomInteger(-100, 100);
    if (arrayMax[i] > max) {
        max = arrayMax[i];
    }
}
document.querySelector("#arraymax1-span").innerHTML = arrayMax;
document.querySelector("#arraymax2-span").innerHTML = max;

//Двадцатое задание
// создает массив, зполненный случайными числами от 1 до 10, а потом находит все повторяющиеся числа и выводит количество по каждому числу
let arrayRepeat = [];
let arrays = {};
for (let i = 0; i < 20; i++) {
    arrayRepeat[i] = randomInteger(0, 10);
}
//let m = 0;
//то же самое что и indexOf, но еще работает для обьектов
function objectIndexOf(myArray, secArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === secArray) return 1;
    }
    return -1;
}
for (let i = 0; i < 20; i++) {
    // проверяем нет ли повторов
    if (objectIndexOf(arrays, arrayRepeat) == -1) {
        //console.log(arrays.indexOf(arrayRepeat[i]));
        let nums = 1;
        for (let k = 0; k < 20; k++) {

            if (arrayRepeat[i] === arrayRepeat[k]) {
                if (i === k) {
                    continue;
                }
                else {
                    nums++;
                }
            }
            arrays[arrayRepeat[i]] = nums;
        }
        //m++;
    }
    else {
        continue;
    }
}
document.querySelector("#arrayrepeat-span").innerHTML = "[" + arrayRepeat + "]";
for (let key in arrays) {
    document.querySelector("#arrayrepeat").innerHTML += "<p>" + key + " = " + arrays[key] + "</p>"
}
