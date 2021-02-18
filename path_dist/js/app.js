$(function () {
    $('.js-mask-phone').mask('+7 (999) 999-99-99')

    // tabs-switch
    $(document).on("click", ".tab-item", (e) => {
        const tab = $(e.currentTarget);
        tab.closest(".tabs-control-box").find(".tab-item").removeClass("active");
        tab.addClass("active");
    });

    if ($('.main-datepicker-here-no-range').length != 0) {
        $('.main-datepicker-here-no-range').datepicker({
            range: false,
            autoClose: true,
            onShow(inst) {
                if (window.innerHeight - inst.$el[0].getBoundingClientRect().bottom <= 250) {
                    inst.update({
                        range: false,
                        position: "top right",
                        autoClose: true,
                    })
                } else {
                    inst.update({
                        range: false,
                        position: "bottom right",
                        autoClose: true,
                    })
                }

                setTimeout(addMobDateBg, 100)
            },
            onSelect: function () {
                $('.mob-datePicker-bg').remove()
            },
        })
    }

    if ($('.main-datepicker-here').length != 0) {
        $('.main-datepicker-here').datepicker({
            autoClose: true,
            onShow(inst) {
                if (window.innerHeight - inst.$el[0].getBoundingClientRect().bottom <= 250) {
                    inst.update({
                        position: "top right",
                        autoClose: true,
                    })
                } else {
                    inst.update({
                        position: "bottom right",
                        autoClose: true,
                    })
                }
                setTimeout(addMobDateBg, 100)


                const btn = document.createElement('span')
                $(btn).addClass('c-btn-datepicker')
                if (inst.selectedDates.length && $(inst.nav.$buttonsContainer).find('.c-btn-datepicker').length == 0) {
                    console.log(true);
                    $(btn).text('Очистить')
                    $('.datepicker--buttons').append(btn)
                    $(btn).on('click', function () {
                        inst.clear()
                    })
                } else if ($(inst.nav.$buttonsContainer).find('.c-btn-datepicker').length == 0) {
                    $(btn).addClass('disabled')
                    $(btn).text('Готово')
                    $('.datepicker--buttons').append(btn)
                }
            },
            onHide(inst) {
                setTimeout(function () {$('.c-btn-datepicker').remove()}, 400)
                $('.mob-datePicker-bg').remove()
            }
        })
    }


    $('.enterance-input').on('click', function () {
        $('.email-cahnge-alert').hide()
    })

    setSliderWidth('.need-resize')

    if(window.innerWidth < 768){
        $(".db_subscribe-cards-box").slick({
            dots: false,
            speed: 300,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: ".sbr-prev-btn",
            nextArrow: ".sbr-next-btn",
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        arrows: false,
                        variableWidth: true,
                        slidesToShow: 3,
                        infinite: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        swipeToSlide: true,
                        touchThreshold: 10,
                        variableWidth: true,
                        slidesToShow: 2,
                        infinite: true,
                    },
                },
            ],
        });
    }
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

$(document).on("click", ".popup__exit-button", function (e) {
    e.stopPropagation()

    if ($(".popup.active").length < 2)
        blackout_off();
    $(this).closest(".popup").removeClass("active");

});

$(document).on("click", ".blackout", (e) => {
    blackout_off();
    if (!blackout.hasClass('blackout_active-datePicker')) {
        $(".popup").removeClass("active");
    }

    blackout.removeClass("blackout_active-datePicker");
});

$(document).on("click", ".button-change-subscribe_js", (e) => {
    $(".service-programs-popup").addClass("active");
    blackout_on();
});

// date-bar

$(document).on("click", ".cal-icon", (e) => {
    const icon = $(e.currentTarget);
    icon.siblings(".input").trigger("click");
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

$(document).on("click", ".find-qr-js", (e) => {
    e.preventDefault()
    $(".find-qr-popup").addClass("active");
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

$(document).on('input', '.file-input-js', function (e) {
    let counter = 0;
    const strNames = [...e.target.files].reduce((accumulator, currentValue) => {
        let scpace = '';
        if (counter === 0)
            counter = ' '
        else
            scpace = ', '
        counter++
        return accumulator + scpace + '' + currentValue.name
    }, '')
    $(this).siblings('.remove-file').show()
    $(this).siblings('.input-js-file').addClass('loaded')
    $(this).siblings('.input-js-file').text(strNames)
})

$(document).on('click', '.remove-file', function () {
    $(this).hide()
    $(this).siblings('input').val('')
    $(this).siblings('.span-file').removeClass('loaded')
    $(this).siblings('.span-file').text('Выберите файл')
})

$(document).on('click', '.find-qr-js-close', function () {
    console.log($(this).closest('popup'));
    $(this).closest('.popup').removeClass('active')
})

$(document).on('click', '.mob-datePicker-bg', function () {
    $(this).remove()
})

$(document).on('click', '.search-clear', function (e) {
    e.stopPropagation();
    if (window.innerWidth >= 768)
        $(this).siblings('.search-field').focus()
    else {
        $(this).siblings('.search-field').blur()
        $('.search-dropdown').hide()
    }

    $(this).prev().val('')
})

$(document).on('blur', '.search-field', function () {
    setTimeout(function () {
        $('.search-dropdown').hide()
        $('.search-mobile-is-active').removeClass('search-mobile-is-active')
    }, 100)
})

$(document).on('focus', '.search-field', function () {
    $('.search-dropdown').show()
    $(this).closest('.search-bar').addClass('search-mobile-is-active')
})

$(document).on('click', '.call-modal', function (e) {
    e.preventDefault()
    const id = $(this).data('id')
    $(`#${id}`).addClass('active')
    blackout_on()
})

$(document).on('click', '.js-next-step-phone', function (e) {
    e.preventDefault()
    $(this).closest('.popup').removeClass('active')
    $(`#${$(this).data('id')}`).addClass('active')
    $('#phone-sms').text($(this).closest('.popup').find('.js-mask-phone').val())
})

$(document).on('click', '.change-phone-modal', function (e) {
    e.preventDefault()
    $(this).closest('.popup').removeClass('active')
    $(`#${$(this).data('id')}`).addClass('active')
})

$(document).on('scroll', changeModalHeightOnMobile)
$(document).on('resize', changeModalHeightOnMobile)
changeModalHeightOnMobile()

function addMobDateBg() {
    if (window.innerWidth < 768 && $('.mob-datePicker-bg').length < 1 && $('.datepicker.active').length != 0) {
        let dateBlackout = document.createElement('div')
        $(dateBlackout).addClass('mob-datePicker-bg')
        $('body').append(dateBlackout)
    }
}

function changeModalHeightOnMobile() {
    if (window.innerWidth < 768) {
        $('.popup').each(function () {
            const bannerHeight = $(this).find('.popup-decorative-picture').length != 0 ?
                $(this).find('.popup-decorative-picture').height() : 0;
            const btnsHeight = $(this).find('.modal-controls').length != 0 ?
                $(this).find('.modal-controls').height() : 0;
            const height = window.innerHeight - bannerHeight - btnsHeight

            $(this).css('max-height', `${window.innerHeight}px`)
            $(this).find('.popup-content').css('max-height', `${height}px`)
        })
    }
}

$(function () {
    setSliderWidth('.need-resize')
})

$(window).on('resize', function () {
    setSliderWidth('.need-resize')
})

function setSliderWidth (selector) {
    if(window.innerWidth < 1280) {
        $(selector).width(`${window.innerWidth - 15}px`)
    }
}