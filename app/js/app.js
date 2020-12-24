$(function () {
  //  search-input`s mechanics
  if (window.innerWidth < 768) {
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
  }

  // tabs-switch

  $(document).on("click", ".tab-item", (e) => {
    const tab = $(e.currentTarget);
    tab.closest(".tabs-control-box").find(".tab-item").removeClass("active");
    tab.addClass("active");
  });
});

// if ($(".input-tel")) {
//   $(".input-tel").mask("+7 (999) 999-9999");
// }
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
