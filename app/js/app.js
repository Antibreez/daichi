$(function () {
  if (window.innerWidth < 768) {
    //  search-input`s mechanics

    $(".search-bar").addClass("mobile");
    $(".search-field").attr("placeholder", "Поиск");

    $(document).on("input", ".search-field", (e) => {
      const input = $(e.currentTarget);
      const clear = input.siblings(".search-clear");

      console.log(clear);

      if (input.val().length !== 0) {
        console.log(1);
        input.closest(".search-bar").addClass("inputed-mobile");
      } else if (input.val().length == 0) {
        input.closest(".search-bar").removeClass("inputed-mobile");
      }
      $(clear).on("click", (e) => {
        input.closest(".search-bar").removeClass("inputed-mobile");
      });
    });

    $(".input-tel").mask("+7 (999) 999-9999");

    // subscribe-cards
  }

  // tabs-switch

  $(document).on("click", ".tab-item", (e) => {
    const tab = $(e.currentTarget);
    tab.closest(".tabs-control-box").find(".tab-item").removeClass("active");
    tab.addClass("active");
  });

  if($('.main-datepicker-here').length != 0) {
    $('.main-datepicker-here').datepicker({
      onShow(inst) {
        if(window.innerHeight - inst.$el[0].getBoundingClientRect().bottom <= 250) {
          inst.update({
            position: "top right",
          })
        } else {
          inst.update({
            position: "bottom right",
          })
        }
      }
    })
  }


  $('.enterance-input').on('click', function (){
    $('.email-cahnge-alert').hide()
  })

});

// const versInput = $(".enterance-input");

// $(document).on("change", ".enterance-input", (e) => {
//   //   if (versInput.val.charAt(0) == 1) {
//   //     versInput.addClass("input-tel");
//   //   }
//   console.log(123);
// });

// $(".target").change(function () {
//   2;
//   alert("Handler for .change() called.");
//   3;
// });

// versInput.oninput = function () {
//   console.log(versInput.val());
// };

const countdownItem = $(".countdown-item");

const percentage_progress = (countdownItem) => {
  countdownItem.each(function () {
    const countdown_data = $(this).data();
    const percentage =
      (countdown_data.currentDay / countdown_data.cycleDays) * 100;

    $(this)
      .find(".progress-scale")
      .css("width", percentage + "%");
  });
};

percentage_progress(countdownItem);

// программы обслуживания - вызов попапа

const blackout = $(".blackout");

const blackout_on = () => {
  blackout.addClass("blackout_active");
  $("html, body").css("overflow-y", "hidden");
};

const blackout_off = () => {
  blackout.removeClass("blackout_active");
  $("html, body").css("overflow-y", "auto");
};

$(document).on("click", ".popup__exit-button", (e) => {
  e.stopPropagation()
  blackout_off();
  $(".popup").removeClass("active");
});

$(document).on("click", ".blackout", (e) => {
  blackout_off();
  $(".popup").removeClass("active");
  console.log("blac");
});

$(document).on("click", ".button-change-subscribe_js", (e) => {
  $(".service-programs-popup").addClass("active");
  blackout_on();
});

// date-bar

$(document).on("click", ".cal-icon", (e) => {
  const icon = $(e.currentTarget);
  icon.siblings(".input").trigger("focus");
});

// requests-modals

$(document).on("click", ".request-item", (e) => {
  blackout_on();

  const request_item = $(e.currentTarget);

  request_item.find(".popup").addClass("active");
});

// modal dropdown

$(document).on("click", ".modal-dropdown-title", (e) => {
  const btn = $(e.currentTarget);
  if (btn.siblings(".modal-dropdown-box").filter(":animated").length > 0) {
    return false;
  }

  btn.siblings(".modal-dropdown-box").slideToggle(250);
  btn.toggleClass("open");
});

$(document).on("mouseover", ".alert-box", (e) => {
  const alertBox = $(e.currentTarget);

  alertBox
    .closest(".input-container")
    .find(".input-alert-window")
    .addClass("input-alert-window_visible");
});

$(document).on("mouseleave", ".alert-box", (e) => {
  const alertBox = $(e.currentTarget);

  alertBox
    .closest(".input-container")
    .find(".input-alert-window")
    .removeClass("input-alert-window_visible");
});

// if (window.innerWidth < 768) {
//   $(document).on("click", "data-picker"
// }

// var hideKeyboard = function() {
//   document.activeElement.blur();
//   $("input").blur();
// };  if (window.innerWidth < 768) {

// чекбоксы опций в оформлении заказа
$(document).on("click", ".option-item", function (e) {
  $(this).find("input[type = radio]").prop("checked", true);
  $(this).closest(".switch-box").find(".option-item").removeClass("select");
  $(this).closest(".option-item").addClass("select");
});

// вставка текста из подсказок в строке поиска
$(document).on("click", ".search-prompt", (e) => {
  const prompt = $(e.currentTarget);
  prompt.closest(".search-bar").find(".search-field").val(prompt.text());
});

// замена картинок в custom drop-down select menu (оформление заказа)

$(document).on("click", ".select__item", (e) => {
  const sel = $(e.currentTarget);
  const newSrc = sel.data("nsrc");
  sel
    .closest(".custom-select-bar")
    .find(".select-picture img")
    .attr("src", newSrc);
});

//

$(document).on("click", ".switch", function () {
  $(this).toggleClass("switchOn");
});

// qr-scanner

let text = document.querySelector(".text");
//

$(document).on("click", ".register-new-device-js", (e) => {
  $(".device-registration-popup").addClass("active");
  blackout_on();
});

$(document).on("click", ".qr-scanner-trigger", (e) => {
  $(".qr-scanner-modal").addClass("active");

  QrScanner.hasCamera()
    .then(
      (res) => {
        if (res !== true) throw Error("Not camera");
        console.log("decoded qr code:", "result", res);
        let videoElement = document.querySelector(".js-video-box");
        window.qrScanner = new QrScanner(videoElement, (result) => {
          console.log("decoded qr code:", result);
          $(".warranty-qr-inner").val(result);
          qrScanner.stop();
          $(".qr-scanner-modal").removeClass("active");
        });
        window.qrScanner.start();
      },
      (err) => {
        console.log(err);
      }
    )
    .catch((error) => {
      console.log(error);
      text.innerHTML = error.message;
    });

  window.qrScanner.start();
});
