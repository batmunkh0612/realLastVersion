let choice = localStorage.getItem('userEmail');
document.querySelector('h2').innerText = choice
document.querySelector('.add').onclick = () => {
    const $food = document.querySelector('.food').value;
    db.collection('randomFood').add({
        food: $food,
        user: choice,
    })
    document.querySelector('.list').innerHTML = "";

    db.collection('randomFood').where('user', '==', choice).get().then((snapshot) => {
        snapshot.forEach((doc) => {
            const $li = document.createElement('li');
            $li.innerText = doc.data().food;
            document.querySelector('.list').append($li);
        })
    })
    document.querySelector('.food').value = "";
}
document.querySelector('.back').onclick = () => {
    window.location.href = 'index.html'
}