let sendBtn = document.querySelector('.send');
let logOut = document.querySelector('.logOut');
let $email = document.querySelector('.email');
$email.innerText = localStorage.getItem('userEmail')
let send = false
document.querySelector('.backToHome').style.display = "none";
if (localStorage.getItem('logOut') === "true") {
    sendBtn.style.display = "none";
    document.querySelector('.backToHome').style.display = "block";
    document.querySelector('.backToHome').onclick = () => {
        location = "./home/home.html"
    }
} else {
    auth.onAuthStateChanged(user => {
        if (user.emailVerified === true) {
            console.log('ff');

            sendBtn.style.display = "none";
            window.location.href = "./home/home.html";
        };
    });
}
const sendVerificationEmail = () => {
    auth.currentUser.sendEmailVerification().then(() => {
            console.log('send done');
            sendBtn.innerText = "Confirmation email"
        })
        .catch(error => {
            console.log(error);
        })
}

sendBtn.onclick = () => {
    if (send === true) {
        location.reload();
    };
    sendVerificationEmail()
    send = true;
    alert('check email')
    sendBtn.innerText = "Confirmation";
}


logOut.addEventListener('click', () => {
    auth.signOut()
        .then(() => {
            console.log('gsgs')
            window.location.href = "index.html";
        })
        .catch(error => {
            console.log(error);
        })
})