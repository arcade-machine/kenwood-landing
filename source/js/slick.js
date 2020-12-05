$('.actions__list').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ]
});

$('.info__container').slick({
    dots: true,
    arrows: false,
    autoplay: false
});

$('.features__slider').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    infinite: false,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ]
});

$('.toward-view__slider').each(function() {
    $(this).slick({
        arrows: false,
        dots: true,
        autoplay: false,
        infinite: false
    });
});

$('.nozzle-heading__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false,
    infinite: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});