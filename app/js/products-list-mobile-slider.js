if (window.innerWidth < 768) {
    $(".products-box-slider-js").slick({
      dots: false,
      infinite: false,
      speed: 300,
      arrows: false,
      variableWidth: true,
      slidesToShow: 3,
      slidesToScroll: 1,
  
      // responsive: [
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 3,
      //       slidesToScroll: 1,
      //     },
      //   },
      // ],
    });
  }
  