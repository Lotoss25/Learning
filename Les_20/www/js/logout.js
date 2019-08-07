document.querySelector("#logout").onclick = function () {
    let cook = document.cookie;
    let date = new Date();
    date.setTime(date.getTime() - (60 * 1000));
    let expires = date.toUTCString();
    document.cookie = `email=${cook}; path=/; expires=${expires}`;
    location.reload();
}