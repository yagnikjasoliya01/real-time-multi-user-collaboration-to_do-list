const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const button = document.querySelector('.btn')
button.addEventListener('click', () => {
    const input = document.querySelector('#email');
    input.innerHTML = `${"email"}`
})