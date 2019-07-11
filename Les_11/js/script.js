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

document.querySelectorAll(".modal-wrap").forEach(
    function (e) {
        e.onclick = closeModalWrap;
    }
)



function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).parentElement.classList.remove("hide");
    document.querySelector(modalId).classList.remove("hide");
    document.onkeydown = function (event) {
        if (event.keyCode == 27) {
            document.querySelectorAll(".modal-wrap").forEach(
                function (e) {
                    e.classList.add("hide");
                    e.children[0].classList.add("hide");
                    document.onkeydown = null;
                }
            )
        }
    }
}

function closeModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).parentElement.classList.add("hide");
    document.querySelector(modalId).classList.add("hide");
    document.onkeydown = null;
}

function closeModalWrap() {
    this.classList.add("hide");
    this.children[0].classList.add("hide");
    document.onkeydown = null;
}