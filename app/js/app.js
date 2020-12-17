function bodyFixPosition() {
  setTimeout(function () {
    /*задержка для предотвращения конфликтов */

    if (!document.body.hasAttribute("data-body-scroll-fix")) {
      // Получаем позицию прокрутки
      let scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      // Ставим нужные стили
      document.body.setAttribute("data-body-scroll-fix", scrollPosition); // Cтавим атрибут со значением прокрутки
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = "-" + scrollPosition + "px";
      document.body.style.left = "0";
      document.body.style.width = "100%";
    }
  }, 15);
}
function bodyUnfixPosition() {
  if (document.body.hasAttribute("data-body-scroll-fix")) {
    // Получаем позицию прокрутки из атрибута
    let scrollPosition = document.body.getAttribute("data-body-scroll-fix");

    // Удаляем атрибут
    document.body.removeAttribute("data-body-scroll-fix");

    // Удаляем ненужные стили
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.width = "";

    // Прокручиваем страницу на полученное из атрибута значение
    window.scroll(0, scrollPosition);
  }
}

const blackoutOn = () => {
  $(".blackout").addClass("blackout_active");
  $("body, html").css("overflow", "hidden");
  bodyFixPosition();
};
const blackoutOff = () => {
  $(".blackout").removeClass("blackout_active");
  $("body, html").css("overflow", "auto");
  bodyUnfixPosition();
};

// document - ready - function
$(document).ready(function () {
  // события по скроллу для сворачивания хедера

  const scrollDown = () => {
    $(".header").addClass("header_hidden");
    $("main").addClass("main__padding_active");
  };

  const scrollUp = () => {
    $(".header").removeClass("header_hidden");
    $("main").removeClass("main__padding_active");
  };

  let posTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

  $(window).on("scroll", function () {
    const newPostop = $(this).scrollTop();

    if (
      newPostop > 150 &&
      !$(".header").hasClass("header_hidden") &&
      posTop < newPostop
    ) {
      scrollDown();
      return;
    } else if (posTop > newPostop && $(".header").hasClass("header_hidden")) {
      scrollUp();
      return;
    }
    setTimeout(() => (posTop = newPostop), 200);
  });

  // anchors on page
  $(document).on("click", ".anchor-link_js", function (e) {
    let target = this.hash,
      $target = $(target);

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top - 120,
        },
        400,
        "swing"
      );
  });
  // anchors on page end

  // Доп. действия элементов - редирект (кнопки в ссылки!)
  $(document).on("click", ".tile__item", function (e) {
    // if ($this.child(".tile__menu").filter(":animated")) {
    //   $this.preventDefault();
    // }
    document.location.href = $(this).find(".tile__menu-button").attr("href");
  });

  $(document).on("click", ".summary-checkout-link", function (e) {
    document.location.href = "#777";
  });
  // кнопки в ссылки - end

  // проброс id - атрибуттов итд
  // проброс id - атрибуттов итд
  // проброс id - атрибуттов итд

  const replacement = (element) => {
    const data = element.data();
    const finalPriceBox = element
      .closest(".item__control-block")
      .find(".item__final-cost");
    const oldPriceBox = element
      .closest(".item__control-block")
      .find(".item__old-cost");

    finalPriceBox.text(`${data.finalCost} ₽`);

    if (data.oldCost && data.oldCost != 0) {
      oldPriceBox.text(`${data.oldCost} ₽`);
      oldPriceBox.removeClass("item__old-cost_hidden");
      finalPriceBox.removeClass("item__final-cost_one");
    } else {
      oldPriceBox.addClass("item__old-cost_hidden");
      finalPriceBox.addClass("item__final-cost_one");
    }
  };

  const sendVendorCode = (element) => {
    const data = element.data();
    const cartButton = element
      .closest(".item__control-block")
      .find(".item__cart-button");

    cartButton.attr("data-vendor-code-result", data.vendorCode);
  };

  const switcher = (buttonClicked) => {
    // if(!buttonClicked){
    //   return replacement($(".item-option_select"))
    // }

    // return replacement(buttonClicked)

    // buttonClicked ? replacement(buttonClicked) : replacement($(".item-option_select"));

    // replacement(buttonClicked ? buttonClicked : $(".item-option_select"))

    const element = buttonClicked || $(".item-option_select");

    replacement(element);
    sendVendorCode(element);
  };

  $(document).on("click", ".item-option", function (e) {
    e.preventDefault();

    const $this = $(this);

    $this
      .closest(".item-rail")
      .find(".item-option")
      .removeClass("item-option_select");
    $this.addClass("item-option_select");

    switcher($this);
  });

  // проброс id - атрибуттов итд КОНЕЦ

  // faq - clicks - drop-down
  $(document).on("click", function (e) {
    if ($(".faq__answer").filter(":animated").length > 0) {
      return false;
    }

    if ($(e.target).hasClass("faq__caption")) {
      const btn = e.target;
      $(btn).toggleClass("faq__caption_open");
      $(btn).siblings(".faq__answer").slideToggle(350);
    } else {
      $(".faq__answer").slideUp(350);
    }
  });

  // маска на инпуты

  if (document.querySelector(".input-tel")) {
    $(".input-tel").mask("+7 (999) 999-9999");
  }

  //вызовы и скрытие попапа
  const blackout = document.querySelector(".blackout");
  const popUp = document.querySelector(".pop-up");
  const callmeButton = document.querySelector(".header__call-me");
  const exitButton = document.querySelector(".button-exit");

  const popupHide = () => {
    blackoutOff();
    popUp.classList.remove("pop-up_active");
    $(".cart-layout").removeClass("cart-layout_hide");
  };

  const popupShow = () => {
    blackoutOn();
    popUp.classList.add("pop-up_active");

    $(".cart-layout").addClass("cart-layout_hide");
  };

  $(document).on("click", ".header__call-me", popupShow);
  $(document).on("click", ".button-exit , .blackout", popupHide);

  // бургер меню

  const cartLayout = document.querySelector(".cart-layout");

  $(document).on("click", function (e) {
    if ($(".header__middlebox").filter(":animated").length > 0) {
      return false;
    }

    if (
      $(e.target).hasClass("header__burger") ||
      $(e.target).closest(".header__burger").length
    ) {
      const btn = $(e.target).closest(".header__burger").length
        ? $(e.target).closest(".header__burger")
        : e.target;

      if (btn.hasClass("burger_open")) {
        $("body, html").css("overflow", "auto");
        bodyUnfixPosition();
      } else {
        $("body, html").css("overflow", "hidden");
        bodyFixPosition();
      }

      $(btn).toggleClass("burger_open");
      $(btn).closest(".header").find(".header__middlebox").slideToggle(350);
      $(cartLayout).toggleClass("cart-layout_hide");
    }
  });

  const burgerClose = () => {
    bodyUnfixPosition();
    $(".header__burger").removeClass("burger_open");
    $("body, html").css("overflow", "auto");
    $(".header__middlebox").slideUp(350);
    $(".cart-layout").removeClass("cart-layout_hide");
  };

  $(document).on("click", ".header__nav-item", (e) => {
    burgerClose();
    const trgt = $(e.currentTarget);
    document.location.href = trgt.attr("href");
  });

  // пространство для лэйаута корзины

  freeLayoutSpace = () => {
    if (!$(cartLayout).hasClass("cart-layout_hidden")) {
      document.querySelector("footer").classList.add("footer-margin");
    } else {
      return;
    }
  };

  freeLayoutSpace();

  // выпадашка в хедере
  //header deop-down

  const timetable = document.querySelector(".current-timetable");
  $(document).on("click", function (e) {
    if ($(e.target).hasClass("header__city current-city")) {
      $(timetable).toggleClass("header__timetable_hidden");
      const btn = e.target;
      $(btn).toggleClass("header__city_open");
      $(btn).siblings(".header__drop-down").slideToggle(350);
    } else {
      $(timetable).removeClass("header__timetable_hidden");
      $(".header__drop-down").slideUp(350);
    }
  });

  // swipes mechanics

  document.addEventListener("touchstart", handleTouchStart, false);
  document.addEventListener("touchmove", handleTouchMove, false);
  let xDown = null;
  let yDown = null;

  function getTouches(evt) {
    return (
      evt.touches || // чистый API JS
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    const currentUnit = yDiff;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /* ловлю разницу в движении */
      if (xDiff > 0) {
        /* swipe влево */
      } else {
        /* swipe вправо */
      }
    } else {
      if (yDiff > 0) {
        /* swipe вверх */
        console.log(currentUnit + " up");
      } else {
        /* swipe вниз */

        if ($(".burger").hasClass("burger_open")) {
        } else {
          // $(".cart-layout").removeClass("cart-layout_hide");
          popupHide();
          blackoutOff();
          cartSlideOut();
          mobileAboutOut();
          mobileChoiserOut();
          console.log(yDiff + " down");
        }
      }
    }
    /* свайп был, обнуляем координаты */
    xDown = null;
    yDown = null;
  }

  // drop-down mechanics
  // все выпадашки в карточке товара .

  // card-item drop-down mechanics

  $(document).on("click", ".item__button-show", function (e) {
    e.preventDefault();
    const $this = $(this);

    $this.toggleClass("item__button-show_open");

    if ($this.next().hasClass("open-js")) {
      $this.next().removeClass("open-js");
      $this.next().slideUp(350);
    } else {
      $this
        .parent()
        .parent()
        .find("card__drop-down-item")
        .removeClass("open-js");
      $this.parent().parent().find("card__drop-down-item").slideUp(350);
      $this.next().toggleClass("open-js");
      $this.next().slideToggle(350);
    }
  });
});

// end of document - ready

// изменение контента карточки в зависимости от выбранного размера

$(document).on("click", ".item-option", function (e) {
  const size = $(this).data().size;

  $(this).closest(".item").find("[data-show-size]").removeClass("active-slot");
  $(this)
    .closest(".item")
    .find('[data-show-size="' + size + '"]')
    .addClass("active-slot");

  $(this)
    .closest(".item")
    .find("img")
    .attr("src", $(this).attr("data-picture"));
});

// выпадающие меню в карточке товара
const mobileAboutIn = (element) => {
  element
    .closest(".item")
    .find(".mobile-slide-menu")
    .removeClass("mobile-slide-menu_hidden");
};

const mobileAboutOut = (element) => {
  $(".mobile-slide-menu").addClass("mobile-slide-menu_hidden");
};

const mobileChoiserIn = (element) => {
  element
    .closest(".item")
    .find(".item-choiser")
    .addClass("item-choiser_active");
};

const mobileChoiserOut = (element) => {
  $(".item-choiser").removeClass("item-choiser_active");
};

const cartSlideIn = (element) => {
  element.closest(".item").find(".cart-about").removeClass("cart-about_hidden");

};
const cartSlideOut = (element) => {
  $(".cart-about").addClass("cart-about_hidden");
};

// сами события
$(document).on("click", ".about-exit-button, .blackout", function (e) {
  cartSlideOut();
  $(".cart-layout").removeClass("cart-layout_hide");
  blackoutOff();
});

$(document).on("click", ".cart-item__name_js, .item__pic img", function (e) {
  const element = $(e.target);
  blackoutOn();
  cartSlideIn(element);
  $(".cart-layout").addClass("cart-layout_hide");
});




$(document).on(
  "click",
  ".about-exit-button, .blackout, .mobile-slide-menu-button",
  function (e) {
    mobileAboutOut();
    $(".cart-layout").removeClass("cart-layout_hide");
    blackoutOff();
  }
);

$(document).on(
  "click",
  ".item__choice-button, .mobile-slide-menu-button",
  function (e) {
    const element = $(e.target);
    mobileChoiserIn(element);
    blackoutOn();
    $(".cart-layout").addClass("cart-layout_hide");
  }
);

$(document).on(
  "click",
  ".item-choiser-exit, .blackout, .mobile-slide-about-button, .mobile-slide-choiser__button",
  function (e) {
    blackoutOff();
    mobileChoiserOut();
    $(".cart-layout").removeClass("cart-layout_hide");
  }
);

$(document).on("click", ".item__about-button", function (e) {
  const element = $(e.target);
  mobileAboutIn(element);
  blackoutOn();
  $(".cart-layout").addClass("cart-layout_hide");
});
// конец выпадашек

// тумблер (доставка для кого-то)
$(document).on("click", ".switch", function () {
  $(this).toggleClass("switchOn");

  $(".for-someone-drop").slideToggle(350);
});

//кнопки  городов на карте карта
$(document).on("click", ".map__button", function (e) {
  e.preventDefault();
  const $this = $(this);

  $this
    .closest(".map-controls")
    .find(".map__button")
    .removeClass("map__button_select");

  $this.addClass("map__button_select");

  $(".map-button-icon_spb").removeClass("map-button-icon_spb_select");
  $(".map-button-icon_msk").removeClass("map-button-icon_msk_select");

  $this.find(".map-button-icon_spb").addClass("map-button-icon_spb_select");
  $this.find(".map-button-icon_msk").addClass("map-button-icon_msk_select");
});

// свитчер городов в форме
$(document).on("click", ".checkout-city", function (e) {
  $(this).find(".city-radio").prop("checked", true);
  $(this).siblings().removeClass("checkout-city_select");
  $(this).addClass("checkout-city_select");
});

// свитчер опций на доставку
$(document).on("click", ".tab", function (e) {
  $(this).find(".first-option").prop("checked", true);
  $(this).closest(".tabs-block").find(".tab").removeClass("tab_select");
  $(this).closest(".tab").addClass("tab_select");
});

// copy - последняя страница заказ оформлен
$(document).on("click", ".order-copy-btn", function (e) {
  const $tmp = $("<input>");
  $("body").append($tmp);
  $tmp.val($(".order-number").text()).select();
  document.execCommand("copy");
  $tmp.remove();
});

// инпут для даты из формы
if (window.innerWidth > 768) {
  $(document).on("mouseover", ".date-wrp", (e) => {
    $(".date-input").attr("type", "date");
    $(".cal-icon").css("display", "none");
  });

  $(document).on("mouseleave", ".date-wrp", (e) => {
    $(".cal-icon").css("display", "block");
  });

  $(document).on("click", ".cal-icon", function (e) {
    $(this).siblings(".date-input").attr("type", "date");
  });
}

if (window.innerWidth < 768) {
  $(".date-input").attr("type", "date");
  $(".date-input").attr("onfocus", "(this.type='date')");
  $(".date-input").attr("onblur", "(this.type='date')");

  $(document).on("click", ".date-input", function (e) {
    $(".cal-mask").css("display", "none");
  });
}

// плашка "Итого" по скроллу на стр. оформления заказа

$(window).on("scroll", function () {
  if ($(".header").hasClass("header_hidden")) {
    $(".summary").removeClass("summary-alt-pos");
  } else {
    $(".summary").addClass("summary-alt-pos");
  }
});

// cartInCart поведение от ширины

if (window.innerWidth < 768) {
  $(".cartInCart").removeClass(".cart-layout_hidden");
}

// maths of the control panel in full-card-page.html
$(document).on("click", ".control-panel .item-option", (e) => {
  const opt = $(e.currentTarget);
  const data = opt.data();
  const costbox = opt.closest(".control-panel").find(".current-cost");
  costbox.text(`${data.finalCost} ₽`);
  const btn = opt.closest(".control-panel").find(".button__to-cart");
  btn.attr("data-vendor-code-result", data.vendorCode);
});
