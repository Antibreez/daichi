if (window.innerWidth < 768) {
  $(".service-popup-container").slick({
    dots: true,
    speed: 300,
    arrows: false,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        centerMode: false,
      }
    }
]
  });
}
