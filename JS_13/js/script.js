"use strict";

let a2 = {
    3: 'hello',
    'one': 'hi',
    'testt': 'vodoley',
    'ivan': 'ivanov'
};

let out = "";
for (let key in a2) {
    if (key.length > 4) {
        out += key + "<br>";
    }
}

document.querySelector(".out").innerHTML = out;