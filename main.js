$(document).ready(function () {
  $(".openpage-slider").slick({
    arrows: false,
    adaptiveHeight: true,
    draggable: true,
    dots: true,
    appendDots: $(".slider-dots"),
    customPaging: function () {
      return '<button type="button"></button>';
    },
  });
});

$(document).ready(function () {
  $(".selector-slider-doctors").slick({
    arrows: false,
    adaptiveHeight: true,
    draggable: true,
    dots: true,
    slidesToShow: 3,
    rows: 2,
    appendDots: $('.dots-doctors-slider'),
    customPaging: function () {
      return '<button type="button"></button>';
    },
  });
});
// хз как запустить и настроить другого вида dots
