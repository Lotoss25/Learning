"use strict";

function ajax(type, url, array, functionName) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(type, url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(dataSet());

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            functionName(this.response);
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

