document.querySelector("#submit").onclick = function (event) {
    event.preventDefault();
    let geturl = document.querySelector("#geturl").value;

    let arr = {
        "geturl": geturl
    }

    ajax("POST", "unit4.php", arr, output);

    function output(out) {
        document.write(out);
    }
}