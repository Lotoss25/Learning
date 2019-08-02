document.querySelector("#submit").onclick = function (event) {
    event.preventDefault();
    let text = document.querySelector("#text").value;
    let arr = {}


    if (/[а-я]/.test(text) == false) {
        arr = {
            "t1": text
        }

        ajax("POST", "unit3.php", arr, output);

        function output(out) {
            console.log(out);
        }
    }
    else {
        alert("Please, enter valid words");
    }
}
