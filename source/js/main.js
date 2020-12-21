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
    $('.cooking__btn').each(function() {
        $(this).on('click', function() {
            const currentIndex = $(this).parent().attr('data-line');
            const previousIndex = $('.cooking__btn.active').parent().attr('data-line');
            $('.cooking__item[data-line=' + previousIndex + ']').slideUp();
            $('.cooking__btn.active').removeClass('active'); 
            $(this).addClass('active');
            $('.cooking__item[data-line=' + currentIndex + ']').slideDown();
        });
    });
    $('.cooking__btn').click();
}

const nozzlesInfoContainer = document.querySelectorAll('.nozzles-list__container');

if (nozzlesInfoContainer.length) {
    nozzlesInfoContainer.forEach(
        (container) => {
            const nozzlesListInfo = document.querySelectorAll('.nozzles-list__info');
            const currentNozzlesListInfo = container.querySelector('.nozzles-list__info');
            const nozzlesList = container.querySelector('.nozzles-list__items');
            const nozzlesItem = nozzlesList.querySelectorAll('.nozzles-list__item');
            const nozzlesInfo = container.querySelectorAll('.nozzles-info');
            let activeItemIndex;
    
            nozzlesItem.forEach(
                (item, index) => {
                    item.addEventListener('click', () => {
                        activeItemIndex = index;
    
                        nozzlesInfo.forEach(
                            (nozzle) => {
                                nozzle.classList.remove('nozzles-info--active');
                            }
                        )
    
                        nozzlesListInfo.forEach(
                            (info) => {
                                info.classList.remove('nozzles-list__info--active');
                            }
                        )
    
                        currentNozzlesListInfo.classList.add('nozzles-list__info--active');
                        nozzlesInfo[activeItemIndex].classList.add('nozzles-info--active');
                        container.scrollIntoView();
                    })
                }
            )
        }
    )
}
