document.querySelector("#submit").onclick = function (event) {
    event.preventDefault();
    let a = document.querySelector("#a").value;
    let b = document.querySelector("#b").value;

    let arr = {};
    if (a < b) {
        arr = {
            "a": a,
            "b": b
        }
        ajax("POST", "unit1.php", arr, output);

        function output(out) {
            console.log(out)
        }
    }
    else {
        alert("a < b really?");
    }


}