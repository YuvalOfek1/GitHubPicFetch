const form = document.getElementById('form');
const popup = document.querySelector('.popup');
const picture = document.getElementById('picture');
const email = document.getElementById('email');


form.addEventListener('submit', e => {
    e.preventDefault();
    let username = document.getElementById('username').value;
    username = username[0].toUpperCase() + username.slice(1).toLowerCase();
    picture.src =`https://github.com/${username}.png`;
    const greeting = document.getElementById('greetings');
    greeting.innerHTML = `You are so beautiful, ${username}!`;
    /*create an element after greeting of h1*/
    const h1 = document.createElement('h1');
    h1.innerHTML = `Email: ${email.value}`;
    h1.classList.add('email');
    greeting.appendChild(h1);
    popup.classList.add('show');
});

popup.addEventListener('click', e => {
    if (e.target === popup) {
        popup.classList.remove('show');
    }
    });