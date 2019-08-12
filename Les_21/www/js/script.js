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

document.querySelector("#login-form").onclick = function (event) {
    event.preventDefault();
    let pass = document.querySelector("#login-pass").value;
    let email = document.querySelector("#login-email").value;
    let arr = {
        "pass": pass,
        "email": email
    }

    ajax("POST", "core/login.php", arr, login);

    function login(out) {
        console.log(out);
        if (out == 2) {
            alert("Please, enter email and password");
        }
        else if (out == 0) {
            alert("Some error occurred");
        }
        else {
            out = JSON.parse(out);
            console.log(out);
            let date = new Date();
            date.setTime(date.getTime() + (10 * 60 * 1000));
            let expires = date.toUTCString();
            document.cookie = `email=${out.email}; path=/; expires=${expires}`;
            location.href = "cabinet.php";
        }
    }

}