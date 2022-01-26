localStorage.clear();
document.querySelector('.registerBtn').onclick = () => {
    let mail = document.querySelector('#mail').value;
    let pass = document.querySelector('#pass').value;
    let rePass = document.querySelector('#rePass').value;
    if (pass === rePass) {
        firebase.auth().createUserWithEmailAndPassword(mail, pass)
            .then(() => {
                auth.onAuthStateChanged(user => {
                    localStorage.setItem('userEmail', `${user.email}`);
                })
                window.location.href = 'emailVerifi.html';
            })
            .catch(error => {
                alert('burtgej chadsangui!')
            })
    } else {
        alert('re-pass buruu bn');
    }

}
let $showHide = document.querySelector('.showHide');
let $showHide1 = document.querySelector('.showHide1');

$showHide.onclick = () => {
    let $pass = document.querySelector('#rePass');
    if ($pass.type === "password") {
        $pass.type = "text";
        $showHide.innerText = "hide";
    } else {
        $pass.type = "password";
        $showHide.innerText = "show";
    }
};
$showHide1.onclick = () => {
    let $pass = document.querySelector('#pass');
    if ($pass.type === "password") {
        $pass.type = "text";
        $showHide1.innerText = "hide";
    } else {
        $pass.type = "password";
        $showHide1.innerText = "show";
    }
}
document.querySelector('.backToLogin').onclick = () => {
    window.location.href = "index.html"
}