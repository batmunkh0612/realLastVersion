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

let $input = document.getElementsByTagName("input");
// console.log($input);
$input.setAtt

function checkWin() {
    console.log(
        window
        .getComputedStyle(document.querySelector("#haha"), "after")
        .getPropertyValue("content")
    );
}
document.s


function goBack() {
    location.href = "../play/play.html#item7";
}


// input:nth-of-type(2):checked ~ .column::after
// let $winner = '';

// if(!$input.value === ''){
//     if($winner === ''){
//         $winner = $input.innerhtml
//     }else{
//         $input.innerhtml = ''
//     }
// }