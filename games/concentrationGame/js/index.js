// 0. quistions gdg collection-oo awchraad randomlono done
// 1. const onStart = () => { done
// 2. second guigeed if(second === 0) {list listruu shiljine} done
// 3. firebase-s collection awchraad zurj haruulna done
// 3. zuw hariultnii logic done
// 4. hariultnuudiin ali neg deer n darhad start-ruu shiljeed zurag n soligdood adilhan uildel hiine gsn ug done
const $randomImg = document.querySelector(".randomImg");
const $previewImg = document.querySelector(".previewImg");

const $question = document.querySelector(".question");
const $time = document.querySelector(".time");

const $answer1 = document.querySelector(".answer1");
const $answer2 = document.querySelector(".answer2");
const $answer3 = document.querySelector(".answer3");
const $answer4 = document.querySelector(".answer4");
const $questionBtn = document.querySelector(".questionDiv");

let second = 3;
let correctAnswer;

const answers = [$answer1, $answer2, $answer3, $answer4];
for (let answer of answers) {
    answer.onclick = clickBtn;
}

function clickBtn(e) {
    if (e.target.innerText === correctAnswer) {
        e.target.style.backgroundColor = "green";
    } else {
        e.target.style.backgroundColor = "red";
    }
    setTimeout(() => {
        location.reload();
    }, 1000);
};

//start button chn ramdom img deer bga
const onStart = () => {
    second--;
    document.querySelector('.startBtn').style.display = "none"
    if (second === 0) {
        document.querySelector('.previewImgContainer').style.display = "none";
        $randomImg.style.display = "none";
        document.querySelector('.container').style.display = "flex";
    }
    $time.innerText = second;
    setTimeout(onStart, 1000);
};


const sshot = () => {
    db.collection("questions")
        .get()
        .then((querySnapshot) => {
            console.log("here");
            let randomNumber = Math.floor(
                Math.random() * querySnapshot.docs.length
            );
            let doc = querySnapshot.docs[randomNumber];
            $randomImg.style.backgroundImage = `url(${doc.data().image})`;
            // document.querySelector('.container').style.backgroundImage = `url(${doc.data().image})`;
            correctAnswer = doc.data().correcAnswer;

            $answer1.innerText = `${doc.data().answer1}`;
            $answer2.innerText = `${doc.data().answer2}`;
            $answer3.innerText = `${doc.data().answer3}`;
            $answer4.innerText = `${doc.data().answer4}`;
            $questionBtn.innerText = `${doc.data().question}`;

            setTimeout(() => {
                const $startBtn = document.createElement("button");
                $startBtn.classList.add("startBtn");
                $startBtn.onclick = onStart;
                $startBtn.innerText = "Start";
                $previewImg.append($startBtn);
            }, 1500);
        });
};
sshot();


document.querySelector('.backBtn').onclick = () => {
    console.log('gds');
    location.reload();
}