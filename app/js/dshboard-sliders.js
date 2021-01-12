// слайдер устройств

if (window.innerWidth < 1200) {
    $(".product-item").unwrap();
}

$(".products-box-slider-js").slick({
    dots: false,
    infinite: false,
    speed: 300,
    prevArrow: ".dvc-prev-btn",
    nextArrow: ".dvc-next-btn",
    // variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
            },
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
            },
        },
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
    infinite: false,
    speed: 300,
    // variableWidth: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: ".sbr-prev-btn",
    nextArrow: ".sbr-next-btn",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
            },
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 500,
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
        infinite: false,
        speed: 300,
        arrows: false,
        // variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    variableWidth: true,
                },
            },
        ],
    });
}
