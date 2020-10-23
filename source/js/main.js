const header = document.querySelector('.header');
const burger = header.querySelector('.header__burger');

burger.addEventListener('click', () => {
    header.classList.toggle('header--open');
})
