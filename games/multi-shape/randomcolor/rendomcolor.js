let $bigshape = document.getElementById("bigshape");
let x = Math.floor(Math.random() * 256);
let y = Math.floor(Math.random() * 256);
let z = Math.floor(Math.random() * 256);
let bgColor = "rgb(" + x + "," + y + "," + z + ")";
$bigshape.style.backgroundColor = bgColor;
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



function onClickfour(current) {
    if (current.offsetHeight === 8 && current.offsetWidth === 8) {
        return;
    }
    if (current.classList == "little_shape") {
        document
            .getElementsByClassName("little_shape")[0]
            .removeAttribute("onClick");

        current.classList.remove("little_shape");
    }

    // let bigshape = document.getElementById('Bigshape');
    let widthsize = current.offsetWidth / 2 + "px";
    let heightsize = current.offsetHeight / 2 + "px";

    if (current.classList == "big_shape") {
        current.classList.remove("big_shape");
        current.classList.add("widthbig");
        document.getElementsByClassName("widthbig")[0].removeAttribute("onClick");
    }

    for (let i = 0; i < 2; i++) {
        let circle = document.createElement("div");
        circle.classList.add("middle_shape");
        for (let j = 0; j < 2; j++) {
            let middleCircle = document.createElement("div");
            middleCircle.classList.add("little_shape");
            middleCircle.onclick = () => onClickfour(middleCircle);

            let a = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let c = Math.floor(Math.random() * 256);
            let bkgColor = "rgb(" + a + "," + b + "," + c + ")";
            middleCircle.style.backgroundColor = bkgColor;
            circle.style.backgroundColor = 'white'
                // middleCircle.onclick = "onClickfour(this)"
            circle.append(middleCircle);
            middleCircle.style.width = widthsize;
            middleCircle.style.height = heightsize;
        }

        current.append(circle);
    }
}

// restart button function
document.querySelector(".restart").onclick = () => {
    location.reload();
}

function goBack() {
    location.href = "../../play/play.html#item5";
}