window.onload = function () {
    document.getElementById("menu").onmouseover = menuShow;
    document.getElementById("menu").onmouseout = menuHide;
    var counter = 0;

    function menuShow() {
        document.getElementById("menu").style.left = "0";
        counter = 1;
    }
    function menuHide() {
        document.getElementById("menu").style.left = "-150px";
        counter = 0;
    }

    document.onkeydown = function (event) {
        if (event.code == "KeyM" && counter == 1) {
            menuHide();
        }
        else if (event.code == "KeyM" && counter == 0) {
            menuShow();
        }
    }
}