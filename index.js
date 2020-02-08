const burger = document.querySelector('.burger');
const links = document.querySelector('.links');
burger.addEventListener('click', () => {
    links.classList.toggle('links-active')
    burger.style.zIndex = "1000";
});