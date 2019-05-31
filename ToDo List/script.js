window.onload = function () {
    var toDo = [];

    if (localStorage.getItem("toDoList") != undefined) {
        toDo = JSON.parse(localStorage.getItem("toDoList"));
        console.log(toDo);
        out();
    }

    document.getElementById("add").onclick = function () {
        var d = document.getElementById("in").value;
        var cache = {};
        cache.todo = d;
        cache.done = false;
        var i = toDo.length;
        toDo[i] = cache;
        console.log(toDo);
        document.getElementById("in").value = "";
        out();
        localStorage.setItem("toDoList", JSON.stringify(toDo));
    }

    function out() {
        var out = "";
        for (var key in toDo) {
            if (toDo[key].done == true) {
                out += '<input type="checkbox" checked>';
            }
            else {
                out += '<input type="checkbox">';
            }
            out += toDo[key].todo + "<br>";
        }
        document.getElementById("out").innerHTML = out;
    }
}