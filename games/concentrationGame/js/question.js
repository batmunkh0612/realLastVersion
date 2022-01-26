
const $question = document.querySelector(".question");
const $randomImg = document.querySelector(".randomImg");

const $startBtn = document.querySelector(".startBtn");
const $time = document.querySelector('.time');

const $answerContainer = document.querySelector('.answerContainer');

let minute = 0;
let second = 4;

let correctAnswer;
const $questionBtn = document.querySelector(".questionBtn");
const $answer1 = document.querySelector(".answer1");
const $answer2 = document.querySelector(".answer2");
const $answer3 = document.querySelector(".answer3");
const $answer4 = document.querySelector(".answer4");

const answers = [$answer1, $answer2, $answer3, $answer4];
for (let answer of answers) {
  answer.onclick = click;
}

function click(e) {
  if (e.target.innerText === correctAnswer) {
    e.target.style.backgroundColor = "green";
  } else {
    e.target.style.backgroundColor = "red";
  }
  setTimeout(() => {
    minute = 0;
    second = 4;

    const time = minute + ":" + second;
    document.querySelector(".time").innerText = time;

    b()

    $question.style.display = "none";
    $randomImg.style.display = "flex";
  }, 1000);
}


const b = () => {
    db.collection("questions").get().then((querySnapshot) => {
    // console.log(querySnapshot.docs);

    let randomNumber = Math.floor(Math.random() * querySnapshot.docs.length);
    let doc = querySnapshot.docs[randomNumber];
    correctAnswer = doc.data().correcAnswer;
    $randomImg.style.backgroundImage = `url(${doc.data().image})`;
    
    $answer1.innerText = `${doc.data().answer1}`;
    $answer2.innerText = `${doc.data().answer2}`;
    $answer3.innerText = `${doc.data().answer3}`;
    $answer4.innerText = `${doc.data().answer4}`;

    $questionBtn.innerText = `${doc.data().question}`;
}).then(() => {
  // $startBtn.style.display = "flex"
  // $startBtn.style.display = "flex"
});
}
b()
const onStart = () => {
  if (minute === 0 && second === 0) {
    $question.style.display = "flex";
    $randomImg.style.display = "none";
    return 0;
  } else if (second === 0) {
    minute--;
    second = 59;
  } else {
    second--;
  }
  const time = minute + ":" + second;
  document.querySelector(".time").innerText = time;

  setTimeout(onStart, 1000);
};

