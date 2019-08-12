let myCookie = getCookie("email");

//кнопки, появление и пропадание, активация изменения значений полей
let change = document.querySelector("#change");
change.onclick = function () {
    change.style.display = "none";
    document.querySelectorAll(".disabled").forEach(
        function (e) {
            e.disabled = false;
        }
    )
    document.querySelectorAll(".update-user").forEach(
        function (e) {
            e.style.display = "inline";
        }
    )
    document.querySelector("#update-cancel").onclick = function () {
        update();
    }
}

//функция для закрытия режима редактирования
function update() {

    change.style.display = "";
    document.querySelectorAll(".update-user").forEach(
        function (e) {
            e.style.display = "none";
        }
    )
    document.querySelectorAll(".disabled").forEach(
        function (e) {
            e.disabled = true;
        }
    )

    //возвращаем данные из базы
    ajax("POST", "core/get_user_data.php", { "email": myCookie }, dataFunction);

    function dataFunction(out) {
        let array = JSON.parse(out);

        document.querySelector("#form-name").value = array.name;
        document.querySelector("#form-pass").value = array.password;
        document.querySelector("#form-birth").value = array.birthday;

        if (array.sex == "other") {
            document.querySelector("#other").checked = true;
        }
        else if (array.sex == "female") {
            document.querySelector("#female").checked = true;
        }
        else {
            document.querySelector("#male").checked = true;
        }


    }



}

//берем данные с нашего куки, выводим данные в поля
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


ajax("POST", "core/get_user_data.php", { "email": myCookie }, dataFunction);


function dataFunction(out) {
    let array = JSON.parse(out);
    console.log(array);

    document.querySelector("#form-name").value = array.name;
    document.querySelector("#form-pass").value = array.password;
    document.querySelector("#form-birth").value = array.birthday;

    if (array.sex == "other") {
        document.querySelector("#other").checked = true;
    }
    else if (array.sex == "female") {
        document.querySelector("#female").checked = true;
    }
    else {
        document.querySelector("#male").checked = true;
    }

}


//изменение значений в базе данных
document.querySelector("#update-input").onclick = function () {

    let name = document.querySelector("#form-name").value;
    let pass = document.querySelector("#form-pass").value;
    let birth = document.querySelector("#form-birth").value;
    let sex;
    document.querySelectorAll('input[name="sex"]').forEach(
        function (e) {
            if (e.checked == true) {
                sex = e.value;
            }
        }
    )

    let arr = {
        "email": myCookie,
        "name": name,
        "pass": pass,
        "birthday": birth,
        "sex": sex
    }

    ajax("POST", "core/update_user_data.php", arr, changeFunction);

    function changeFunction(out) {
        if (out == 1) {
            console.log("Account changes saved");
            update();
        }
    }
}