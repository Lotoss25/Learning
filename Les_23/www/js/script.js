document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, { "format": "dd-mm-yyyy" });
});

document.querySelector("#form-submit").onclick = function (event) {
    event.preventDefault();
    let name = document.querySelector("#form-name").value;
    let pass = document.querySelector("#form-pass").value;
    let email = document.querySelector("#form-email").value;
    let birth = document.querySelector("#form-birth").value;
    let sex = document.querySelectorAll(".sex");
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

//modal
document.querySelectorAll(".modal-show").forEach(
    function (e) {
        e.onclick = showModal;
    }
)

document.querySelectorAll(".modal-close").forEach(
    function (e) {
        e.onclick = closeModal;
    }
)

function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove("hide");
    document.onkeydown = function (event) {
        if (event.keyCode == 27) {
            document.querySelectorAll(".modal-wrap").forEach(
                function (e) {
                    e.classList.add("hide");
                    document.onkeydown = null;
                }
            )
        }
    }
}

function closeModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.add("hide");
    document.onkeydown = null;
}

//rules
document.querySelector(".rules-read").onclick = function () {
    document.querySelector(".rules").style.marginLeft = "-400px";
}

let rulesCheck = document.querySelector(".rules-fill");

//rules кнопка назад и установка галки прочитанных правил, активация кнопки регистрации
document.querySelectorAll(".rules-read-back").forEach(function (e) {
    e.onclick = function () {
        document.querySelector(".rules").style.marginLeft = "0";
        rulesCheck.checked = "true";
        document.querySelector("#form-submit").classList.remove("disabled");
    }
});

//rules активация/деактивация кнопки регистрации
rulesCheck.onclick = function () {
    if (rulesCheck.checked == true) {
        document.querySelector("#form-submit").classList.remove("disabled");
    }
    else {
        document.querySelector("#form-submit").classList.add("disabled");
    }
}