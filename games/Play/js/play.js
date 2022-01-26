document.querySelector(".imgLogo").onclick = () => {
    console.log("done");
    location = "../../home/home.html";
};

let myTimer = setInterval(() => {
    if (document.querySelector(".section")) {
        document.querySelector('fake').style.display = "none";
        clearInterval(myTimer);
    } else {;
    }

}, 100)

db.collection("slides").orderBy('priority').onSnapshot((sshot) => {
    const docs = sshot.docs;
    for (let i = 0; i < docs.length; i++) {
        const $section = document.createElement("section");
        $section.classList.add("section");
        $section.id = `list${i + 1}`;
        $section.setAttribute("data-anchor", `item${i + 1}`);
        $section.style.backgroundImage = `url(${
            docs[i].data().backgroundImage
        })`;

        const $li = document.createElement("li");
        $li.setAttribute("data-menuanchor", `item${i + 1}`);

        const $a = document.createElement("a");
        $a.setAttribute("href", `#item${i + 1}`);
        $a.innerHTML = `${docs[i].data().menu}`;

        $li.append($a);
        document.querySelector("ul").append($li);

        for (let j = 0; j < docs[i].data().texts.length; j++) {
            const $footnote = document.createElement("div");
            $footnote.classList.add("footnote");


            const $gameImg = document.createElement("img");
            $gameImg.src = `${sshot.docs[i].data().texts[j].icon}`;
            $gameImg.style.height = "127px";
            $gameImg.style.width = "119px";

            const $h2 = document.createElement("h2");
            $h2.classList.add("test");
            $h2.innerText = `${sshot.docs[i].data().texts[j].text}`;
            $h2.onclick = () => {
                location = `${docs[i].data().texts[j].link}`
            }
            const $one = document.createElement("i");
            $one.classList.add("fa", "fa-angle-right", "one");
            const $two = document.createElement("i");
            $two.classList.add("fa", "fa-angle-right", "two");

            $h2.append($one, $two);
            $footnote.append($gameImg, $h2);
            $section.append($footnote);

            //icon
            $h2.addEventListener(
                "mouseenter",
                function() {
                    $two.style.marginLeft = "10px";

                    setTimeout(function() {
                        $one.style.marginLeft = "20px";
                    }, 500);

                    setTimeout(function() {
                        $two.style.marginLeft = "0px";
                    }, 700);

                    setTimeout(function() {
                        $one.style.marginLeft = "5px";
                    }, 900);
                },
                false
            );

            document.getElementById("fullpage").append($section);
        }
    }
    new fullpage(".container", {
        autoScrolling: true,
        scrollBar: true,
        anchors: [
            "item1",
            "item2",
            "item3",
            "item4",
            "item5",
            "item6",
            "item7",
        ],
        afterLoad: (origin, destination) => {
            const $fromEl = document.querySelector(
                `li[data-menuanchor="${origin.anchor}"]`
            );
            const $toEl = document.querySelector(
                `li[data-menuanchor="${destination.anchor}"]`
            );
            const $toElA = document.querySelector(
                `li[data-menuanchor="${destination.anchor}"] a`
            );
            const $fromElA = document.querySelector(
                `li[data-menuanchor="${origin.anchor}"] a`
            );
            $fromEl.style.listStyleType = "circle";
            $toEl.style.listStyleType = "disc";
        },
    });
});