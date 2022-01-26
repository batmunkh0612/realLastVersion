const $backgroundImageDiv = document.querySelector(".backgroundImageDiv");
const $backgroundImageInput = document.querySelector(".backgroundImageInput");

const storage = firebase.storage().ref();

$backgroundImageDiv.onclick = () => {
    $backgroundImageInput.click();
};

const data = {
    backgroundImage: "",
    menu: "",
    priority: "",
    texts: [],
};

const onNewItem = () => {
    const $item = document.createElement("div");
    const index = data.texts.length;
    $item.classList.add(
        "flex",
        "space-around",
        "align-center",
        "item-container",
        `text-item-${index}`
    );

    const $icon = document.createElement("div");
    $icon.classList.add("gameImage");

    const $hidden = document.createElement("input");
    $hidden.classList.add("hidden", "icon");
    $hidden.type = "file";

    $icon.onclick = () => {
        $hidden.click();
    };

    const $text = document.createElement("input");
    $text.onkeyup = () => {
        data.texts[index].text = $text.value;
    };
    $text.placeholder = "Game text";

    const $link = document.createElement("input");
    $link.onkeyup = () => {
        data.texts[index].link = $link.value;
    };
    $link.placeholder = "Please enter the link...";

    const $priority = document.createElement('input');
    $priority.classList.add('priority');
    $priority.placeholder = "priority";
    $priority.type = "number";


    $item.append($icon, $hidden, $text, $link, $priority);
    document.querySelector(".text-inputs").append($item);

    data.texts.push({
        text: "",
        icon: "",
        link: "",
    });
};
document.querySelector(".new-item-btn").onclick = onNewItem;
onNewItem();

const onSave = () => {
    data.menu = document.querySelector(".menu-input").value;
    data.priority = document.querySelector(".priority").value;

    const doc = db.collection("slides").doc();
    const backgroundImage = storage.child(`background-images/${doc.id}-bg.svg`);
    const bgImagePromise = backgroundImage.put($backgroundImageInput.files[0]);

    const promises = [bgImagePromise];
    for (const index in data.texts) {
        const icon = storage.child(`${doc.id}/text-item-icon-${index}.svg`);
        const promise = icon.put(
            document.querySelector(`.text-item-${index} .icon`).files[0]
        );
        promises.push(promise);
    }

    Promise.all(promises).then((results) => {
        const urlPromises = []
        for (const index in results) {

            urlPromises.push(results[parseInt(index)].ref.getDownloadURL());
        }

        Promise.all(urlPromises).then((urlResults) => {
            for (const i in urlResults) {
                const intI = parseInt(i);

                if (intI === 0) {
                    data.backgroundImage = urlResults[intI];
                } else {
                    data.texts[intI - 1].icon = urlResults[intI];
                }
            }
            doc.set(data);
        });
    }).then(() => {
        console.log('success');
    });
};