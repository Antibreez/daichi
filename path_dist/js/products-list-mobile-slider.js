if (window.innerWidth < 768) {
    $(".products-box-slider-js").slick({
        dots: false,
        speed: 300,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                },
            },
        ]
    });
}