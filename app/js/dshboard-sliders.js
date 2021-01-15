// слайдер устройств

if (window.innerWidth < 1280) {
    $(".product-item").unwrap();
}

$(".products-box-slider-js").slick({
    dots: false,
    infinite: true,
    speed: 300,
    prevArrow: ".dvc-prev-btn",
    nextArrow: ".dvc-next-btn",
    // variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 1280,
            settings: {
                arrows: false,
                variableWidth: true,
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                swipeToSlide: true,
                touchThreshold: 10,
                variableWidth: true,
                slidesToShow: 2,
                infinite: false,
            },
        }
    ],
});


// $(".products-box-slider-js").filter('.slick-initialized').slick("unslick");
// $(function () {
//   wrpShifter();
// });

// $(window).on("resize", (e) => {
//   wrpShifter();
// });

//слайдер активных подписок
$(".db_subscribe-cards-box").slick({
    dots: false,
    speed: 300,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: ".sbr-prev-btn",
    nextArrow: ".sbr-next-btn",
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                arrows: false,
                variableWidth: true,
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                swipeToSlide: true,
                touchThreshold: 10,
                variableWidth: true,
                slidesToShow: 2,
                infinite: false,
            },
        },
    ],
});

// слайдер промо-карточек подписок
if (window.innerWidth < 768) {
    $(".sbr-promo-box_db").slick({
        dots: false,
        speed: 300,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true,
                },

                breakpoint: 768,
                settings: {
                    swipeToSlide: true,
                    touchThreshold: 10,
                    slidesToShow: 2,
                    variableWidth: true,
                    infinite: false,
                },
            },
        ],
    });
}

$(function () {
    setSliderWidth('.need-resize')
})

$(window).on('resize', function () {
    setSliderWidth('.need-resize')
})

function setSliderWidth (selector) {
    if(window.innerWidth < 768) {
        $(selector).width(`${window.innerWidth - 15}px`)
    }
}
