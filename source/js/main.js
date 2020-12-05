const header = document.querySelector('.header');
const burger = header.querySelector('.header__burger');

burger.addEventListener('click', () => {
    header.classList.toggle('header--open');
});

$('.characteristics-open').each(function() {
    $(this).on('click', function() {
        $(this).closest('.toward-view__info').find('.toward-view__characteristics').addClass('toward-view__characteristics--visible');
    });
});

$('.toward-view__characteristics-close').each(function() {
    $(this).on('click', function() {
        $(this).closest('.toward-view__characteristics--visible').removeClass('toward-view__characteristics--visible');
    });
});