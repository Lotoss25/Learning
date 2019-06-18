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
