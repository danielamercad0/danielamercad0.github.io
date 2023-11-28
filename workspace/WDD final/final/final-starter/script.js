let state = false;
let button = document.querySelector(".button");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");

button.addEventListener("click", () => {
    if (state == false) {
        record.classList.add("on");
        toneArm.classList.add("play");
    } else {
        record.classList.remove("on");
        toneArm.classList.remove("play");
    }
    state = !state;
});