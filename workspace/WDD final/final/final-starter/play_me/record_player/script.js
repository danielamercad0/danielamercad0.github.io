let state = false;
let button = document.querySelector(".button");
let record = document.querySelector(".record");
let arm = document.querySelector(".arm");

button.addEventListener("click", () => {
    if (state == false) {
        record.classList.add("on");
        arm.classList.add("play");
    } else {
        record.classList.remove("on");
        arm.classList.remove("play");
    }
    state = !state;
});