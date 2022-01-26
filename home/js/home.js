const $text = document.querySelector(".text");

const randomText = (index = 0) => {
    const words = [
        "Завсарлага",
        "Тайвшрах",
        "Сатаарах",
        "Зугаатай",
        "Шинэ санаа",
        "Гайхалтай",
        "Тусгай",
        "Өвөрмөц",
        "Содон",
        "Мэдрэмж",
        "Биширмээр",
        "Цогц",
        "Хязгааргүй",
        "Зүгээр Л"
    ];
    //   $text.innerHTML = words[Math.floor(Math.random() * words.length)];
    $text.innerHTML = words[index];
    if (index === words.length - 1) index = -1;
    setTimeout(() => randomText(index + 1), 250);
};
randomText();
if (localStorage.getItem('choice') === "guest" || localStorage.getItem('userEmail') === null) {
    document.querySelector('.userIcon').style.display = "none";
}
document.querySelector('.userIcon').onclick = () => {
    localStorage.setItem('logOut', "true");
    console.log('gasdg');
    location = "../emailVerifi.html"
}