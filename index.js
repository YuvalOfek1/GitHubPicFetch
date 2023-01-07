const form = document.getElementById('form');
const popup = document.querySelector('.popup');
const picture = document.getElementById('picture');
const email = document.getElementById('email');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const greeting = document.getElementById('greetings');
let username = document.getElementById('username');
// if (!emailRegex.test(email.value)) {
//   alert("Invalid Email");
//   form.reset();
//   return false;
// }



popup.addEventListener('click', e => {
    if (e.target === popup) {
        popup.classList.remove('show');
    }
    });


function createPopUp(){
    return function data(){
        if(username.value === "" || email.value === "") {
            alert("Please fill out all fields");
            form.reset();
            return;
        }
        if (!emailRegex.test(email.value)) {
            alert("Invalid Email");
            return false;
        }
        username.value = username.value[0].toUpperCase() + username.value.slice(1).toLowerCase();
        picture.src =`https://github.com/${username.value}.png`;
        
        greeting.innerHTML = `You are so beautiful, ${username.value}!`;
        
        const h1 = document.createElement('h1');
        h1.innerHTML = `Email: ${email.value}`;
        h1.classList.add('email');
        greeting.appendChild(h1);
        popup.classList.add('show');
    }
    
}
const popUpFunc = createPopUp();
form.addEventListener('submit', e => {
    e.preventDefault();
    popUpFunc();
    
});







// const form = document.getElementById('form');
// const popup = document.querySelector('.popup');
// const picture = document.getElementById('picture');
// const email = document.getElementById('email');
// const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
// // if (!emailRegex.test(email.value)) {
// //   alert("Invalid Email");
// //   form.reset();
// //   return false;
// // }

// form.addEventListener('submit', e => {
    
    
//     e.preventDefault();
//     let username = document.getElementById('username').value;
//     if(username === "" || email.value === "") {
//         alert("Please fill out all fields");
//         form.reset();
//         return;
//     }
//     if (!emailRegex.test(email.value)) {
//         alert("Invalid Email");
//         return false;
//     }
//     username = username[0].toUpperCase() + username.slice(1).toLowerCase();
//     picture.src =`https://github.com/${username}.png`;
//     const greeting = document.getElementById('greetings');
//     greeting.innerHTML = `You are so beautiful, ${username}!`;
    
//     const h1 = document.createElement('h1');
//     h1.innerHTML = `Email: ${email.value}`;
//     h1.classList.add('email');
//     greeting.appendChild(h1);
//     popup.classList.add('show');
// });

// popup.addEventListener('click', e => {
//     if (e.target === popup) {
//         popup.classList.remove('show');
//     }
//     });



