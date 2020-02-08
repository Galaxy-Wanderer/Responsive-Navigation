const burger = document.querySelector('.burger');
const links = document.querySelector('.links');
const closebtn = document.querySelector('nav button');
burger.addEventListener('click', () => links.classList.toggle('links-active'));
closebtn.addEventListener('click', () => links.classList.toggle('links-active'));