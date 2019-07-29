"use strict";

function ajax(type, url, array, functionName) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(type, url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(dataSet());

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            functionName(this);
        }
    }

    function dataSet() {
        let data = "";
        for (let key in array) {
            data += `${key}=${array[key]}&`;
        }
        return data;
    }
}

let arr1 = {
    "fname": "Andrew",
    "lname": "Ivanov"
};

function f1(f11) {
    console.log(f11);
}

ajax("POST", "back.php", arr1, f1);