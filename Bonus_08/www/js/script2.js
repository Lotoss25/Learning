document.querySelector("#submit").onclick = function (event) {
    event.preventDefault();
    let a = document.querySelector("#a").value;
    let b = document.querySelector("#b").value;

    let arr = {
        "a": a,
        "b": b
    }
    ajax("POST", "unit2.php", arr, output);

    function output(out) {
        console.log(out)
    }




}