if (window.innerWidth < 768) {
  $(".mini-tile-mobile-carusel").slick({
    dots: false,
    speed: 300,
    arrows: false,
    // variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
