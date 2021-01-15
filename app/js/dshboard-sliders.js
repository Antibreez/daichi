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
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 769,
            settings: {
                variableWidth: true,
                slidesToShow: 2,
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
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                variableWidth: true,
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
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true,
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
    if(window.innerWidth < 769) {
        $(selector).width(`${window.innerWidth - 15}px`)
    }
}
