let $myAudio = document.querySelector("#myAudio");
let $playPause = document.querySelector("#playPause");
let count = 0;
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

function playPause() {
    if (count == 0) {
        count = 1;
        $myAudio.play();
        playPauseBTTN.innerHTML = "Pause &#9208";
    } else {
        count = 0;
        $myAudio.pause();
        playPauseBTTN.innerHTML = "Play &#9658";
    }
}

function goBack() {
    location.href = "../play/play.html#item2";
}