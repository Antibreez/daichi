let isDesktopProd = window.innerWidth >= 1280;
let isTabletProd = window.innerWidth < 1280 && window.innerWidth >= 768;
let isMobileProd = window.innerWidth < 768;

// слайдер устройств

const productBox = document.querySelector('.my-devices-section .products-box');

const showMoreProducts = document.querySelector('.my-devices-section .show-all') && document.querySelector('.my-devices-section .show-all').cloneNode(true);

const wrapped = document.querySelector('.my-devices-section .products-box') && document.querySelector('.my-devices-section .products-box').cloneNode(true);
const unwrapped = document.querySelector('.my-devices-section .products-box') && document.querySelector('.my-devices-section .products-box').cloneNode(false);

if (productBox) {
    const parts = wrapped.querySelectorAll('.product-item');
    parts.forEach(function(item) {
        unwrapped.appendChild(item.cloneNode(true));
    })
    unwrapped.appendChild(showMoreProducts.cloneNode(true));
}


const productDeskOptions = {
    dots: false,
    infinite: true,
    speed: 200,
    prevArrow: ".dvc-prev-btn",
    nextArrow: ".dvc-next-btn",
    // variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
}

const productTabletOptions = {
    dots: false,
    speed: 200,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    variableWidth: true,
    slidesToShow: 3,
    infinite: false,
    touchThreshold: 20
}

const productMobileOptions = {
    dots: false,
    speed: 200,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    variableWidth: true,
    slidesToShow: 2,
    infinite: false,
    touchThreshold: 20
}

if (productBox) {
    if (window.innerWidth < 1280) {
        //$(".product-item").unwrap();
        productBox.innerHTML = unwrapped.innerHTML;
    }
    
    if (isDesktopProd) {
        $(".products-box-slider-js").slick(productDeskOptions);
    
        $(".products-box-slider-js").slick('slickRemove', false);
    
        //$(".products-box-slider-js").slick('unslick');
    }
    
    if (isTabletProd) {
        $(".products-box-slider-js").slick(productTabletOptions);
    }
    
    if (isMobileProd) {
        $(".products-box-slider-js").slick(productMobileOptions);
    }
}
// $(".products-box-slider-js").slick({
//     dots: false,
//     infinite: true,
//     speed: 300,
//     prevArrow: ".dvc-prev-btn",
//     nextArrow: ".dvc-next-btn",
//     // variableWidth: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,

//     responsive: [
//         {
//             breakpoint: 1280,
//             settings: {
//                 arrows: false,
//                 variableWidth: true,
//                 slidesToShow: 3,
//                 infinite: false,
//             },
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 swipeToSlide: true,
//                 touchThreshold: 10,
//                 variableWidth: true,
//                 slidesToShow: 2,
//                 infinite: false,
//             },
//         }
//     ],
// });


// $(".products-box-slider-js").filter('.slick-initialized').slick("unslick");
// $(function () {
//   wrpShifter();
// });

// $(window).on("resize", (e) => {
//   wrpShifter();
// });

//================================
//слайдер активных подписок
//================================

// $(".db_subscribe-cards-box").slick({
//     dots: false,
//     speed: 300,
//     infinite: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     initialSlide: -1,
//     prevArrow: ".sbr-prev-btn",
//     nextArrow: ".sbr-next-btn",
//     responsive: [
//         {
//             breakpoint: 1280,
//             settings: {
//                 arrows: false,
//                 variableWidth: true,
//                 slidesToShow: 3,
//                 infinite: false,
//             },
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 swipeToSlide: true,
//                 touchThreshold: 10,
//                 variableWidth: true,
//                 slidesToShow: 2,
//                 infinite: false,
//             },
//         },
//     ],
// });
let isDesktop = window.innerWidth >= 1280;
let isTablet = window.innerWidth < 1280 && window.innerWidth >= 768;
let isMobile = window.innerWidth < 768;

const showMore = document.querySelector('.my-subscribes-section .show-all') && document.querySelector('.my-subscribes-section .show-all').cloneNode(true);

const deskOptions = {
    dots: false,
    speed: 200,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: ".sbr-prev-btn",
    nextArrow: ".sbr-next-btn",
};

const tabletOptions = {
    dots: false,
    speed: 100,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 20,
    arrows: false,
};

const mobileOptions = {
    dots: false,
    speed: 300,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    swipeToSlide: true,
    touchThreshold: 10,
    arrows: false,
};

if (isDesktop) {
    $(".db_subscribe-cards-box").slick(deskOptions);

    $('.db_subscribe-cards-box').slick('slickRemove', false);

    //$(".db_subscribe-cards-box").slick('unslick');
}

if (isTablet) {
    $(".db_subscribe-cards-box").slick(tabletOptions);
}

if (isMobile) {
    $(".db_subscribe-cards-box").slick(mobileOptions);
}

// слайдер промо-карточек подписок
// if ($(".sbr-promo-box_db .sbr-promo-wrp").length >= 5 || window.innerWidth < 480) {
    
// }

let isDesktopSubscribe = window.innerWidth >= 1280;

const subsOptions = {
    dots: false,
    speed: 300,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    variableWidth: true
};

if (!isDesktopSubscribe) {
    $(".sbr-promo-box_db").slick(subsOptions);
}


$(window).on('resize', function() {
    //===============
    //ACTIVE SUBSCRIBES
    //===============

    if (isDesktop && window.innerWidth < 1280 && window.innerWidth >= 768) {
        //console.log('to TABLET');
        isDesktop = false;
        isTablet = true;
        isMobile = false;

        $(".db_subscribe-cards-box").slick('unslick');
        
        $(".db_subscribe-cards-box").slick(tabletOptions);

        $('.db_subscribe-cards-box').slick('slickAdd', showMore, false);
    }

    if (isDesktop && window.innerWidth < 768) {
        //console.log('to MOBILE');
        isDesktop = false;
        isMobile = true;
        isTablet = false;

        $(".db_subscribe-cards-box").slick('unslick');

        $(".db_subscribe-cards-box").slick(mobileOptions);

        $('.db_subscribe-cards-box').slick('slickAdd', showMore, false);
    }

    if (isTablet && window.innerWidth >= 1280) {
        //console.log('to DESKTOP');
        isDesktop = true;
        isTablet = false;
        isMobile = false;

        $(".db_subscribe-cards-box").slick('unslick');

        $(".db_subscribe-cards-box").slick(deskOptions);

        $('.db_subscribe-cards-box').slick('slickRemove', false);
    }

    if (isTablet && window.innerWidth < 767) {
        //console.log('to MOBILE');
        isMobile = true;
        isTablet = false;
        isDesktop = false;

        $(".db_subscribe-cards-box").slick('unslick');

        $(".db_subscribe-cards-box").slick(mobileOptions);
    }

    if (isMobile && window.innerWidth >= 768 && window.innerWidth < 1280) {
        //console.log('to TABLET');
        isMobile = false;
        isTablet = true;
        isDesktop = false;

        $(".db_subscribe-cards-box").slick('unslick');

        $(".db_subscribe-cards-box").slick(tabletOptions);
    }

    if (isMobile && window.innerWidth >= 1280) {
        //console.log('to DESKTOP');
        isMobile = false;
        isTablet = false;
        isDesktop = true;

        $(".db_subscribe-cards-box").slick('unslick');

        $(".db_subscribe-cards-box").slick(deskOptions);

        $('.db_subscribe-cards-box').slick('slickRemove', false);
    }

    //===============
    //PRODUCTS
    //===============

    if (productBox) {
        if (isDesktopProd && window.innerWidth < 1280 && window.innerWidth >= 768) {
            //console.log('to TABLET');
            isDesktopProd = false;
            isTabletProd = true;
            isMobileProd = false;
    
            $(".products-box-slider-js").slick('unslick');
    
            productBox.innerHTML = unwrapped.innerHTML;
            
            $(".products-box-slider-js").slick(productTabletOptions);
    
            //$('.products-box-slider-js').slick('slickAdd', showMoreProducts, false);
        }
    
        if (isDesktopProd && window.innerWidth < 768) {
            //console.log('to MOBILE');
            isDesktopProd = false;
            isMobileProd = true;
            isTabletProd = false;
            
            productBox.innerHTML = unwrapped.innerHTML;
    
            $(".products-box-slider-js").slick('unslick');
    
            $(".products-box-slider-js").slick(productMobileOptions);
    
            //$('.products-box-slider-js').slick('slickAdd', showMoreProducts, false);
        }
    
        if (isTabletProd && window.innerWidth >= 1280) {
            //console.log('to DESKTOP');
            isDesktopProd = true;
            isTabletProd = false;
            isMobileProd = false;
    
            $(".products-box-slider-js").slick('unslick');
            
            productBox.innerHTML = wrapped.innerHTML;
    
            $(".products-box-slider-js").slick(productDeskOptions);
    
            $('.products-box-slider-js').slick('slickRemove', false);
        }
    
        if (isTabletProd && window.innerWidth < 767) {
            //console.log('to MOBILE');
            isMobileProd = true;
            isTabletProd = false;
            isDesktopProd = false;
    
            $(".products-box-slider-js").slick('unslick');
    
            $(".products-box-slider-js").slick(productMobileOptions);
        }
    
        if (isMobileProd && window.innerWidth >= 768 && window.innerWidth < 1280) {
            //console.log('to TABLET');
            isMobileProd = false;
            isTabletProd = true;
            isDesktopProd = false;
    
            $(".products-box-slider-js").slick('unslick');
    
            $(".products-box-slider-js").slick(productTabletOptions);
        }
    
        if (isMobileProd && window.innerWidth >= 1280) {
            //console.log('to DESKTOP');
            isMobileProd = false;
            isTabletProd = false;
            isDesktopProd = true;
    
            $(".products-box-slider-js").slick('unslick');
            
            productBox.innerHTML = wrapped.innerHTML;
    
            $(".products-box-slider-js").slick(productDeskOptions);
    
            $('.products-box-slider-js').slick('slickRemove', false);
        }
    }

    

    //===============
    //SUBSCRIBES
    //===============
    if (isDesktopSubscribe && window.innerWidth < 1280) {
        $(".sbr-promo-box_db").slick(subsOptions);
        isDesktopSubscribe = false;
        //console.log('subs to TAblet');
    }

    if (!isDesktopSubscribe && window.innerWidth >= 1280) {
        $(".sbr-promo-box_db").slick('unslick');
        isDesktopSubscribe = true;
        //console.log('subs to Desk');
    }
});

if ($('.my-devices-section .products-box').length === 0) {
    $('.my-devices-section .slider-controls').css('visibility', 'hidden');
    $('.my-devices-section .group-controller').css('visibility', 'hidden');
}

if ($('.my-subscribes-section .subscribe-cards-box').length === 0) {
    $('.my-subscribes-section .slider-controls').css('visibility', 'hidden');
    $('.my-subscribes-section .group-controller').css('visibility', 'hidden');
}