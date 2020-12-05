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

$('.video-block__video').each(function() {
    $(this).on('click', function() {
        if ($(this).parent().hasClass('video-block--playing')) {
            $(this).parent().removeClass('video-block--playing');
            $(this)[0].pause();
        } else {
            $(this).parent().addClass('video-block--playing');
            $(this)[0].play();
        }
    });
});