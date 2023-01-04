const form = document.getElementById('form');
const popup = document.querySelector('.popup');
const picture = document.getElementById('picture');

form.addEventListener('submit', e => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    username = username[0].toUpperCase() + username.slice(1).toLowerCase();
    picture.src =`https://github.com/${username}.png`;
    const greeting = document.getElementById('greetings');
    greeting.innerHTML = `You are so beautiful, ${username}!`;
    popup.classList.add('show');
});

popup.addEventListener('click', e => {
    if (e.target === popup) {
        popup.classList.remove('show');
    }
    });