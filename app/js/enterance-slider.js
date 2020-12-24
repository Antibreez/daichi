

$(function () {
  $('.enterance-slider').slick({
    // autoplay:true,
    // autoplaySpeed:1500,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    variablewidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "enterance-slider__dots",
    pauseOnDotsHover: true,
  });
  
});
