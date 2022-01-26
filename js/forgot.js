document.querySelector('.passBtn').onclick = () => {
    const email = document.querySelector('#mail').value;
    if (email === "") {
        alert('emailee oruulna uu');
    } else {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                // Password reset email sent!
                alert('check email!');
                window.location.href = "index.html";
                // ..
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }

}
document.querySelector('.backToLogin').onclick = () => {
    window.location.href = "index.html"
}