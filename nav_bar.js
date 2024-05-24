const Button = document.getElementById('button');
const Links = document.getElementById('links');

button.addEventListener('click', () => {
    links.classList.toggle('active');
});