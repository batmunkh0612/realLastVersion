let power = false;
let $h2 = document.getElementById("icon")
let $two = document.getElementsByClassName("two")
let $one = document.getElementsByClassName("one")

$h2.addEventListener(
    "mouseenter",
    function() {
        // console.log($two, $one)
        $two[0].style.marginLeft = "10px";

        setTimeout(function() {
            $one[0].style.marginLeft = "20px";
        }, 500);

        setTimeout(function() {
            $two[0].style.marginLeft = "0px";
        }, 700);

        setTimeout(function() {
            $one[0].style.marginLeft = "5px";
        }, 900);
    },
    false
);

document.querySelector('.btnTop2').onclick = () => {
    if (power === false) {
        power = true;
        document.querySelector('.pos').style.display = "block";
        document.querySelector('.point').style.backgroundColor = "red";
        playDi();
        playWorkSound();
    } else {
        power = false;
        document.querySelector('.pos').style.display = "none";
        document.querySelector('.point').style.backgroundColor = "black";
        playDi();
        playWorkSound();
    }
}
document.querySelector('.plus').onclick = () => {

    if (power === true) {
        let num = parseInt(document.querySelector('#num').innerText)
        num = num + 1;
        if (num < 0) {
            document.querySelector('#hasahNemeh').innerText = "";

        }
        document.querySelector('#num').innerText = num;
        playDi();
    }
}
document.querySelector('.minus').onclick = () => {
    if (power === true) {
        let num = parseInt(document.querySelector('#num').innerText)
        num = num - 1;
        if (num < 0) {
            document.querySelector('#hasahNemeh').innerText = "";
            num = num * (-1);
        }
        document.querySelector('#num').innerText = num;
        playDi();
    }
}

document.querySelector('.btnTop1').onclick = () => {
    if (power === true) {
        document.querySelector('.sunnyCold').innerText = "❄";
        document.querySelector('#hasahNemeh').innerText = "-"
        playDi();
    }
}
document.querySelector('.btnTop3').onclick = () => {
    if (power === true) {
        document.querySelector('.sunnyCold').innerText = "☀️";
        document.querySelector('#hasahNemeh').innerText = ""
        playDi();
    }
}

const noiseStartTime = 2;
const noiseDuration = 56;

function playDi() {
    const di = document.querySelector('#di');
    if (di) {
        di.play();
    }
}

let playStartSoundTimeoutId;
let playWorkSoundTimeoutId;
let playWorkSoundIntervalId;

function playStartSound() {
    const acStart = document.querySelector('#acWork');
    acStart.load();
    acStart.play();

    playStartSoundTimeOutId = setTimeout(() => {
        playWorkSound();
    }, 8000)
}

function playWorkSound() {
    if (power) {
        const acWork = document.querySelector('#airExt');
        acWork.load();
        acWork.play();

        playWorkSoundTimeOutId = setTimeout(() => {
            playWorkSoundIntervalId = setInterval(() => {
                acWork.currentTime = noiseStartTime;
            }, noiseDuration * 1000);
        }, noiseStartTime * 1000);
    } else {
        location.reload();
    }

}


function goBack() {
    location.href = "../play/play.html#item6";
}