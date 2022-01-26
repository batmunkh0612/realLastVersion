const $button = document.querySelector("button");
const $tryAgain = document.querySelector("#tryAgain");
const $minute = document.querySelector(".min");
const $second = document.querySelector(".second");
const $span = document.querySelectorAll('span');

const images = [
    "https://images.unsplash.com/photo-1636923253549-0fe2d048cb49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4138&q=80",
    "https://images.unsplash.com/photo-1631084776347-8333fc73ee42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    "https://images.unsplash.com/photo-1637050929981-1c43857a5622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
];
//background zurgaa randomldog heseg
let randomNumber = Math.floor(Math.random() * images.length);
const image = images[randomNumber];
document.querySelector("button").style.backgroundImage = `url(${image})`;


function goBack() {
    location.href = "../play/play.html#item3";
}
const mouseMove = (e) => {
    $minute.innerText = "02";
    $second.innerText = "00";
    $tryAgain.style.display = "inherit";
    for (const span of $span) {
        span.style.color = "#D3321D";
    }
};
const cal = () => {
    let min = parseInt($minute.innerText);
    let sec = parseInt($second.innerText);

    $tryAgain.style.display = "none";
    for (const span of $span) {
        span.style.color = "white";
    }

    if (min === 0 && sec === 0) {
        return 0;
    }
    if (sec === 0) {
        min--;
        $minute.innerText = min;
        sec = 59;
        $second.innerText = sec;
    } else {
        sec = sec - 1;
        $second.innerText = sec;
    }
    if (sec < 10) {
        $second.innerText = "0" + sec;
    }

    setTimeout(cal, 1000);
};
cal();