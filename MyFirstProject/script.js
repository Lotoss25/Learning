// "use strict";

document.onwheel = function (event) {
    console.log(event);
    if (event.deltaY > 0) {
        document.getElementById("line").innerHTML = "вниз";

    }
    else {
        document.getElementById("line").innerHTML = "вверх";
    }
    var speed = Math.abs(event.deltaY);
    if (speed < 100) {
        document.getElementById("speed").innerHTML = "низкая скорость";
    }
    else if (speed > 100) {
        document.getElementById("speed").innerHTML = "высокая скорость";
    }
    else if (speed == 100) {
        document.getElementById("speed").innerHTML = "средняя скорость";
    }
}
var left = 290;
document.getElementById("test").onwheel = function (event) {
    left += 0.2 * event.deltaY;
    document.getElementById("test2").style.left = left + "px";
    return false;
}