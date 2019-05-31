window.onload = function () {
    for (i = 0; i < 9; i++) {
        document.getElementById("game").innerHTML += '<div class="block"></div>';
    }

    var clicks = 0;
    document.getElementById("game").onclick = function (event) {
        console.log(event);
        if (event.target.className = "block") {
            if (clicks % 2 == 0) {
                event.target.innerHTML = "x";
            }
            else {
                event.target.innerHTML = "0";
            }
            clicks++;
            checkWinner();
        }
    }
    function checkWinner() {
        var allblocks = document.getElementsByClassName("block");
        // var matrix2 = [
        //     [allblocks[0], allblocks[1], allblocks[2]]
        // ]
        var matrix = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [2, 5, 8],
            [1, 4, 7]
        ]


        for (i = 0; i < matrix.length; i++) {
            if (allblocks[matrix[i][0]].innerHTML == "x" && allblocks[matrix[i][1]].innerHTML == "x" && allblocks[matrix[i][2]].innerHTML == "x") {
                alert("Победили крестики\nИгра начнется заново");
                location.reload();
            }

            if (allblocks[matrix[i][0]].innerHTML == "0" && allblocks[matrix[i][1]].innerHTML == "0" && allblocks[matrix[i][2]].innerHTML == "0") {
                alert("Победили нолики\nИгра начнется заново");
                location.reload();
            }
        }
    }
}