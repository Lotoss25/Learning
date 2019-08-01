document.querySelector("#form-submit").onclick = function (event) {
    event.preventDefault();
    let name = document.querySelector("#form-name").value;
    let pass = document.querySelector("#form-pass").value;
    let email = document.querySelector("#form-email").value;
    let birth = document.querySelector("#form-birth").value;
    let sex = document.querySelectorAll("#sex");
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked == true) {
            sex = sex[i].value;
            break;
        }
    }
    let arr = {
        "name": name,
        "pass": pass,
        "email": email,
        "birthday": birth,
        "sex": sex
    }

    ajax("POST", "core/signup.php", arr, output);

    function output(out) {
        console.log(out);
        if (out == 1) {
            alert("Registered successfully");
        }
        else if (out == 2) {
            alert("Pls, enter all data");
        }
        else {
            alert("Some error occurred");
        }
    }
}