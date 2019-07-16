document.querySelector(".rules-read").onclick = function () {
    document.querySelector(".rules").style.marginLeft = "-250px";
}

document.querySelectorAll(".rules-read-back").forEach(function (e) {
    e.onclick = function () {
        document.querySelector(".rules").style.marginLeft = "0";
    }
});