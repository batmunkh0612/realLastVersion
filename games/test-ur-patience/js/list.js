firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        // location = "/login.html";
    } else {
        document.querySelector(".startBtn").disabled = false;

    }
});

const images = [
    "https://images.unsplash.com/photo-1640558111248-b070548c2fe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    "https://images.unsplash.com/photo-1642768592021-a144fb821c05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    "https://images.unsplash.com/photo-1642970047663-3010fe472192?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
]

let randomNumber = Math.floor(Math.random() * images.length);
const image = images[randomNumber];
document.querySelector(".previewImage").style.backgroundImage = `url(${image})`;
document.querySelector(".bests").style.backgroundImage = `url(${image})`;


const $time = document.querySelector(".time");
const $bests = document.querySelector(".bests");
const $start = document.querySelector(".start");
const $picture = document.querySelector(".picture");
const $previewImageContainer = document.querySelector(".previewImageContainer");
const $mainContainer = document.querySelector(".main-container");
const $lists = document.querySelector(".lists");

let second = 0;
let interval;

const count = () => {
    second++;
    $time.innerText = second;
};
const onStart = () => {
    $start.style.display = "none";
    $previewImageContainer.style.display = "flex";
    $time.innerText = second;

    setTimeout(() => {
        $mainContainer.onmousemove = mouseMove;

        interval = setInterval(count, 1000);
    }, 500);
};

const renderScore = (data) => {
    const $score = document.createElement("span");
    $score.classList.add("list");
    $score.innerText = `${data.name}: ${data.time} second`;
    $lists.append($score);

    const $createdAt = document.createElement("span");
    $createdAt.classList.add('createdAt');
    // $createdAt.innerText = `${data.createdAt.toDate().getYear()}.${data.createdAt.toDate().getMonth()}.${data.createdAt.toDate().getDay()}`;
    $createdAt.innerText = `${data.createdAt.toDate().toLocaleDateString('zh-Hans-CN')}`
    document.querySelector('.createdAtContainer').append($createdAt)
};

const mouseMove = (e) => {
    const user = firebase.auth().currentUser;
    $mainContainer.onmousemove = null;
    clearInterval(interval);

    // TODO: hooson baiwal yaahwee gedgiish shiideh, shalgah
    db.collection("bests")
        .doc(user.uid)
        .get()
        .then((doc) => {
            let oldTime = 0;
            if (doc.exists) {
                oldTime = doc.data().time;
            }
            if (oldTime < second) {
                db.collection("bests").doc(user.uid).set({
                    time: second,
                    createdAt: new Date(),
                    name: user.phoneNumber, // TODO: change it after Batmonkh's work
                });
            }
        });

    $previewImageContainer.style.display = "none";
    $bests.style.display = "flex";
    db.collection("bests").orderBy('time', 'desc').onSnapshot((snapshot) => {
        $lists.innerHTML = "";
        for (const scoreDoc of snapshot.docs) {
            renderScore(scoreDoc.data());
        }
    });
};

const backBtn = () => {
    location.reload();
    second = 0;
}

function goBack() {
    location.href = "../play/play.html#item3";
}