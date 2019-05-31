var random = Math.floor(10 * Math.random()) + 1;
console.log(random);
var count = 3;
var counts = document.getElementById("counts");
counts.innerHTML = "Попыток: " + count;

document.getElementById("check").onclick = function () {
    var input = parseInt(document.getElementById("in").value);
    console.log(input);


    var out = document.getElementById("out");
    if (count > 0) {
        //проверка на идентичность наших цифр
        if (input === random) {
            alert("Вы победили! Страница будет перезагружена");
            count = 3;
            location.reload();
        }
        else if (input > random) {
            out.innerHTML = "Ваше число больше";
            count--;
        }
        else {
            out.innerHTML = "Ваше число меньше";
            count--;
        }
        counts.innerHTML = "Попыток: " + count;
    }

    if (count === 0) {
        alert("Вы проиграли! Страница будет перезагружена");
        location.reload();
    }
}