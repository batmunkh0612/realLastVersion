const $backroundImage = document.querySelector(".backgroundImage");
const $backgroundImageInput = document.querySelector(".backgroundImageInput");
const $locationInput = document.querySelector(".locationInput");

const $text1Input = document.querySelector(".text1Input");
const $text2Input = document.querySelector(".text2Input");
const $text3Input = document.querySelector(".text3Input");

const $text1Image = document.querySelector(".text1Image");
const $text2Image = document.querySelector(".text2Image");
const $text3Image = document.querySelector(".text3Image");

const $text1ImageInput = document.querySelector('text1ImageInput');

const $menu = document.querySelector('.menu');

const addContainer2 = () => {
    console.log($text1Input.value)
    console.log('f');
    document.querySelector('.container2').classList.remove('hidden');
}

$backroundImage.onclick = () => {
    $backgroundImageInput.click();
};
$text1Image.onclick = () => {
    console.log('hi');
    $text1ImageInput.click();
};
// $text2Image.onclick = () => {
//     $text2Input.click();
// };
// $text3Image.onclick = () => {
//     $text3Input.click();
// };

$backgroundImageInput.onchange = (e) => {
    const image = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(image);
    reader.onload = () => {
        console.log("done");
    };
};

$text1ImageInput.onchange = (e) => {
    const image = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(image);
    reader.onload = () => {
        console.log("done");
    };
};

const onSave = () => {
    const doc = db.collection("slides").doc();

    const storage = firebase.storage().ref();
    const bgImage = storage.child(`background-images/${doc.id}-bg.png`);
    const text1Image = storage.child(`background-images/${doc.id}-text1.png`);
    // const text2Image= storage.child(`background-images/${doc.id}-text2.png`);
    // const text3Image= storage.child(`background-images/${doc.id}-text3.png`);

    bgImage.put($backgroundImageInput.files[0]).then(() => {
        bgImage.getDownloadURL().then((bgUrl) => {
            doc.set({
                backgroundImage: bgUrl,
            }, { merge: true });
        }).then(() => {
            console.log('success');
        }).catch((e) => {
            console.log('error');
        });
    });

    text1Image.put($text1Input.files[0]).then(() => {
        text1Image
            .getDownloadURL()
            .then((url) => {
                doc.get().then((res) => console.log(res.data()));
                doc.set({
                    texts: [{
                            text: $text1Input.value,
                            image: url,
                        },

                    ],
                    location: $locationInput.value,
                    menu: $menu.value
                }, { merge: true });
            })
            .then(() => {
                $text1Input.value = "";
                console.log("text success");
            })
            .catch((e) => {
                console.log("txt error", e);
            });
    });

    //
    //  slides
    //      {someId}
    //          bgImg: ''
    //          texts: [
    //              { text: ''. img: '' }
    //          ]

    // console.log(doc ,storage);
};



const addContainer3 = () => {
    console.log('f');
    document.querySelector('.container3').classList.remove('hidden');
}