window.onscroll = function() {
    const video = document.getElementById("teamVideo");
    myFunction();
    // backgroundVideo();
};

function myFunction() {
    //team video
    if (document.documentElement.scrollTop >= 150 && document.documentElement.scrollTop <= 210) {
        document.getElementById("teamVideo").muted = true;
        document.getElementById("teamVideo").play();
    } else if (document.documentElement.scrollTop >= 1950 && document.documentElement.scrollTop <= 2100) {
        document.getElementById("teamVideo").pause();
    }
    // web video
    if (document.documentElement.scrollTop >= 2210 && document.documentElement.scrollTop <= 2270) {
        document.getElementById("zugeerlVideo").muted = true;
        document.getElementById("zugeerlVideo").play();
    } else if (document.documentElement.scrollTop >= 2900 && document.documentElement.scrollTop <= 2990) {
        document.getElementById("zugeerlVideo").pause();
    }

    //starhub fixed
    if (document.documentElement.scrollTop > 4000) {
        document.getElementById("teamImage").className = "teamImages";
        document.querySelector('.imgLogo').style.display = "none";
    } else {
        document.getElementById("teamImage").className = "";
        document.querySelector('.imgLogo').style.display = "block";
    }

}
let imgScroll = document.getElementById("teamImage");
document.querySelector('.imgLogo').onclick = () => {
    location = "home.html";
}