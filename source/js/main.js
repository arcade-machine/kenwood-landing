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

$('.faq__title').each(function() {
    $(this).on('click', function() {
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });
});

if (window.matchMedia("(min-width: 1025px)").matches && document.querySelector('.cooking__item[data-line]')) {
    const animationObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                const lineBlock = document.querySelectorAll('.cooking__line')[entry.target.dataset.line];
                const svg = lineBlock.querySelector('svg path');
                lineBlock.classList.add('animated');
                entry.target.classList.add('animated');
                svg.setAttribute('stroke-dashoffset', 0);
                animationObserver.unobserve(entry.target);
            }
        });
    }, {threshold: 1});

    document.querySelectorAll('.cooking__item[data-line]').forEach(function (element) {
        animationObserver.observe(element);
    });
} else {

}