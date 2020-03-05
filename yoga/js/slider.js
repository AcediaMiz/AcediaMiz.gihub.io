$(document).ready(function() {
  $(".slider").slick({
    centerMode: true,
    centerPadding: "200px",
    arrows: false,
    adaptiveHeight: true,
    autoplay: true
  });
  $(".instructors__slider").slick({
    arrows: false,
    dots: true,
    autoplay: true
  });
  $(".review__slider").slick({
    dots: true
  });
});
