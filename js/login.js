localStorage.clear();
document.querySelector('.signUpBtn').onclick = changeWindow = () => {
    window.location.href = "./register.html"
}
document.querySelector('.loginBtn').onclick = () => {
    let mail = document.querySelector('#mail').value;
    let pass = document.querySelector('#pass').value;
    if (mail === "") {
        alert('ta email-ee oruulna uu');
    } else {
        firebase.auth().signInWithEmailAndPassword(mail, pass)
            .then((userCredential) => {
                localStorage.setItem('userEmail', `${mail}`)
                console.log(window.location);
                window.location = "emailVerifi.html";
            })
            .catch((error) => {
                console.log('code buruu');
            })
    }
}
document.querySelector('.forgot').onclick = () => {
    window.location.href = "forgot.html";
}
document.querySelector('.GuestBtn').onclick = () => {
    localStorage.setItem('choice', "guest");
    window.location.href = "./home/home.html";
}
let $showHide = document.querySelector('.showHide');
$showHide.onclick = () => {
    let $pass = document.querySelector('#pass');
    if ($pass.type === "password") {
        $pass.type = "text";
        $showHide.innerText = "hide";
    } else {
        $pass.type = "password";
        $showHide.innerText = "show";
    }
}
document.querySelector('.fastLogin').onclick = () => {
    document.querySelector('#mail').value = "cypox2017@gmail.com";
    document.querySelector('#pass').value = "06120612";
}