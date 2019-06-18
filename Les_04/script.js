"use strict";

// function randomInteger(min, max) {
//     let rand = min - 0.5 + Math.random() * (max - min + 1)
//     rand = Math.round(rand);
//     return rand;
//   }
let randomizer = (function () {
    let rand = Math.round(Math.random() * 10 - 0.5);
    console.log(rand);
    return rand;
})();

document.querySelector("#btn").onclick = function () {
    let number = parseInt(document.querySelector("#input-number").value);
    if (isNaN !== number && number !== "") {
        if (number > randomizer) {
            alert("Ваше число больше задуманного");
            document.querySelector("#input-number").value = "";
        }
        else if (number < randomizer) {
            alert("Ваше число меньше задуманного");
            document.querySelector("#input-number").value = "";
        }
        else {
            alert("Вы победили");
            location.reload();
        }

    }
    else {
        alert("Введите число");
    }
}

//второе задание
let counterHide = 3;
let hideBtn = document.querySelector("#hide-button");
hideBtn.onclick = function () {
    --counterHide;
    if (counterHide > 0) {
        hideBtn.innerHTML = `"Не жмакать!" ${counterHide}`;
    }
    else {
        hideBtn.hidden = "true";
    }
}

//третье задание
document.querySelector("#compare").onclick = function () {
    let first = parseInt(document.querySelector("#input-first").value);
    let second = parseInt(document.querySelector("#input-second").value);
    if (first > second) {
        document.querySelector("#return-id").value = first;
    }
    else {
        document.querySelector("#return-id").value = second;
    }
}

//четвертое задание
let signBtn = document.querySelector("#sign");
signBtn.onclick = function () {
    let day = parseInt(document.querySelector("#input-day").value);
    let month = parseInt(document.querySelector("#input-month").value);
    if (isNaN != day && isNaN != month) {//можно добавить проверку на количество цифр
        switch (month) {
            case 1:
                if (day <= 20 && day > 0) {
                    signBtn.innerHTML = "Козерог";
                }
                if (day > 20 && day < 31) {
                    signBtn.innerHTML = "Водолей";
                }
                break;
            case 2:
                if (day <= 19 && day > 0) {
                    signBtn.innerHTML = "Водолей";
                }
                //тут можно еще проверку на высокосный год сделать, но это будет уже слишком ;)
                if (day > 19 && day < 29) {
                    signBtn.innerHTML = "Рыбы";
                }
                break;
            case 3:
                if (day <= 20 && day > 0) {
                    signBtn.innerHTML = "Рыбы";
                }
                if (day > 20 && day < 31) {
                    signBtn.innerHTML = "Овен";
                }
                break;
            case 4:
                if (day <= 20 && day > 0) {
                    signBtn.innerHTML = "Овен";
                }
                if (day > 20 && day < 30) {
                    signBtn.innerHTML = "Телец";
                }
                break;
            case 5:
                if (day <= 21 && day > 0) {
                    signBtn.innerHTML = "Телец";
                }
                if (day > 21 && day < 31) {
                    signBtn.innerHTML = "Близнецы";
                }
                break;
            case 6:
                if (day <= 21 && day > 0) {
                    signBtn.innerHTML = "Близнецы";
                }
                if (day > 21 && day < 30) {
                    signBtn.innerHTML = "Рак";
                }
                break;
            case 7:
                if (day <= 22 && day > 0) {
                    signBtn.innerHTML = "Рак";
                }
                if (day > 22 && day < 31) {
                    signBtn.innerHTML = "Лев";
                }
                break;
            case 8:
                if (day <= 21 && day > 0) {
                    signBtn.innerHTML = "Лев";
                }
                if (day > 21 && day < 31) {
                    signBtn.innerHTML = "Дева";
                }
                break;
            case 9:
                if (day <= 23 && day > 0) {
                    signBtn.innerHTML = "Дева";
                }
                if (day > 23 && day < 30) {
                    signBtn.innerHTML = "Весы";
                }
                break;
            case 10:
                if (day <= 23 && day > 0) {
                    signBtn.innerHTML = "Весы";
                }
                if (day > 23 && day < 31) {
                    signBtn.innerHTML = "Скорпион";
                }
                break;
            case 11:
                if (day <= 22 && day > 0) {
                    signBtn.innerHTML = "Скорпион";
                }
                if (day > 22 && day < 31) {
                    signBtn.innerHTML = "Стрелец";
                }
                break;
            case 12:
                if (day <= 22 && day > 0) {
                    signBtn.innerHTML = "Стрелец";
                }
                if (day > 22 && day < 31) {
                    signBtn.innerHTML = "Козерог";
                }
                break;
        }
    }
    else {
        alert("Введите цифровое значение дня и месяца рождения");
    }
}

//пятое задание
document.querySelector("#china").onclick = function () {
    let inputChina = parseInt(document.querySelector("#input-china").value);
    if (isNaN != inputChina) {
        let yearChina = (2019 - inputChina) % 12;
        switch (yearChina) {
            case 0:
                document.querySelector("#plain-text").innerHTML = "свинья 猪";
                break;
            case 1:
                document.querySelector("#plain-text").innerHTML = "собака 狗";
                break;
            case 2:
                document.querySelector("#plain-text").innerHTML = "петух 鸡";
                break;
            case 3:
                document.querySelector("#plain-text").innerHTML = "обезьяна 猴";
                break;
            case 4:
                document.querySelector("#plain-text").innerHTML = "овца 羊";
                break;
            case 5:
                document.querySelector("#plain-text").innerHTML = "лошадь 马";
                break;
            case 6:
                document.querySelector("#plain-text").innerHTML = "змея 蛇";
                break;
            case 7:
                document.querySelector("#plain-text").innerHTML = "дракон 龙";
                break;
            case 8:
                document.querySelector("#plain-text").innerHTML = "кролик 兔";
                break;
            case 9:
                document.querySelector("#plain-text").innerHTML = "тигр 虎";
                break;
            case 10:
                document.querySelector("#plain-text").innerHTML = "бык 牛";
                break;
            case 11:
                document.querySelector("#plain-text").innerHTML = "крыса 鼠";
                break;

        }
    }
}