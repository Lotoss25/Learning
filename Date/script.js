var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function keyLenght(arr) {
    for (var key in arr) arr[key]++;
}

function forLenght(arr) {
    for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(func) {
    var date = new Date();
    for (var i = 0; i < 1000; i++) func(arr);
    return new Date() - date;
}

//
var timeOne = 0;
var timeTwo = 0;
for (var i = 0; i < 100; i++) {
    timeOne += bench(keyLenght);
    timeTwo += bench(forLenght);
}

alert(timeOne);
alert(timeTwo);
alert(performance.now());

date = new Date();
var options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}

alert(date.toLocaleString("ru", options));
alert(date.toString());

var mstsc = Date.parse("2019-05-08T12:17:45.25Z");
alert(mstsc);