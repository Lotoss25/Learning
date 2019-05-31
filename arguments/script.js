"use strict";
var iam = {
    use: "one",
    lost: "two"
}
var you = {
    super: "get",
    nonsuper: "lost"
}

function copy(dst) {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];
        for (var key in arg) {
            dst[key] = arg[key];
        }
    }
    return dst;
}

copy(iam, you);
alert(iam.nonsuper);

function showWarning(options) { //аргументы по умолчанию и именованные аргументы
    var width = options.width || 200;
    var height = options.height || 100;
    var message = options.message || "Warning";
    alert(message);
}
showWarning({
    message: "SUPER!"
});

var opts = {
    height: 200,
    width: 100,
    message: "YAAAY!"
}
showWarning(opts);