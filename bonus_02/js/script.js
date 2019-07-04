let tabs = document.querySelectorAll(".tab-body");
let tab = document.querySelectorAll(".tab");

show(document.querySelector(".active").getAttribute("data"));

function show(data) {
    for (let i = 0; i < tab.length; i++) {
        if (i + 1 == data) {
            tab[i].className = "tab active";
            tabs[i].style.display = "";
        }
        else {
            tab[i].className = "tab";
            tabs[i].style.display = "none";
        }
    }
}
tab.forEach(
    function (e) {
        e.onclick = function () {
            let data = e.getAttribute("data");
            show(data);
        }
    }
);