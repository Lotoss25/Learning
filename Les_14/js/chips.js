"use strict";
function addChips(message, sec = 3000, color = "white", background = "rgba(0,0,0,.6)") {
    let chips = document.createElement("div");
    chips.classList.add("chips");
    chips.style.backgroundColor = background;
    chips.innerHTML = message;
    chips.style.color = color;
    chipsBody(chips);
    //document.querySelector("body").appendChild(div);
    setTimeout(function () { clearChips(chips) }, sec);

}

function clearChips(chips) {
    chips.remove();
    let rem = document.querySelectorAll(".chips");
    if (rem.length === 0) {
        document.querySelector(".chips-div").remove();
    }

}

function chipsBody(chips) {
    let chipsDiv = document.querySelector(".chips-div");
    if (chipsDiv) {
        chipsDiv.appendChild(chips);
    }
    else {
        let chipsDiv = document.createElement("div");
        chipsDiv.classList.add("chips-div");
        document.querySelector("body").appendChild(chipsDiv);
        chipsDiv.appendChild(chips);

    }
}