if (window.innerWidth < 768) {
  $(".service-popup-container").slick({
    dots: false,
    speed: 300,
    arrows: false,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".service-popup-mobile-navigation",
    centerMode: true,
  });

  $(".service-popup-mobile-navigation").slick({
    dots: false,
    speed: 300,
    arrows: false,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".service-popup-container",
    centerMode: true,
    focusOnSelect: true,
  });
}
