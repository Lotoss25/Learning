let tabs = document.querySelectorAll(".tab-body");
let tab = document.querySelectorAll(".tab");

show(document.querySelector(".active").getAttribute("data"));

function show(data) {
    for (let i = 0; i < tab.length; i++) {
        if (i + 1 == data) {
            tab[i].classList.add('active');
            tabs[i].style.display = "block";
        }
        else {
            tab[i].classList.remove('active')
            tabs[i].style.display = "none";
        }
    }
}
tab.forEach(
    function (e) {
        e.onclick = function () {
            let data = e.getAttribute("data");
            show(data);
            return false;
        }
    }
);