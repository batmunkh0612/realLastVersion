const $imageDiv = document.querySelector(".image");
const $imgInput = document.querySelector(".imgInput");

const $question = document.querySelector(".question");
const $answer1 = document.querySelector(".answer1");
const $answer2 = document.querySelector(".answer2");
const $answer3 = document.querySelector(".answer3");
const $answer4 = document.querySelector(".answer4");
const $correctAnswer = document.querySelector(".correctAnswer");

$imageDiv.onclick = () => {
  $imgInput.click();
};

$imgInput.onchange = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = () => {
    $imageDiv.style.backgroundImage = `url(${reader.result})`;
    $imageDiv.style.backgroundSize = "cover";
  };
};

const onSaveBtn = () => {
  const doc = db.collection("questions").doc();

  const storage = firebase.storage().ref();
  const img = storage.child(`questions/${doc.id}.png`);

  img.put($imgInput.files[0]).then(() => {
      img.getDownloadURL().then((url) => {
          doc.set({
            image: url,
            question: $question.value,
            answer1: $answer1.value,
            answer2: $answer2.value,
            answer3: $answer3.value,
            answer4: $answer4.value,
            correcAnswer: $correctAnswer.value,
          });
        })
        .then(() => {
          $answer1.value = "";
          $answer2.value = "";
          $answer3.value = "";
          $answer4.value = "";
          $correctAnswer.value = "";
          $question.value = "";
          $imageDiv.style.backgroundImage = "none";
        });
      console.log("success");
      alert("success");
    })
.catch((e) => {
      console.log("error", e);
    });
};
