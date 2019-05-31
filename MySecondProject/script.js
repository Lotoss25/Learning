window.onload = function () {
    var scrolled;
    var timer;
    document.getElementById("butt1").onclick = function () {
        scrolled = window.pageYOffset;
        // window.scrollTo(0, 0);
        scrollToTop();
    }
    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled -= 100;
            timer = setTimeout(scrollToTop, 10);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
}
