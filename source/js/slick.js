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

