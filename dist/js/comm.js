jQuery(document).ready(function ($) {
  // Window properties
  let wHeight = window.innerHeight;
  let wWidth = window.innerWidth;

  $(window).resize(function () {
    wHeight = window.innerHeight;
    wWidth = window.innerWidth;
  });

  let container = $("#scroll-container");
  let containerYOffset = Math.floor(container.offset().top - wHeight);
  $(window).on("scroll", function () {
    let currentPosition = $(window).scrollTop();
    if (currentPosition >= containerYOffset) {
      container.css("position", "absolute");
      container.css("bottom", "0");
      container.css("top", "unset");
    }
    container.css("position", "fixed");

    let xTranslateAmt = currentPosition - containerYOffset;
    let scroll = anime({
      targets: "#scroll-container",
      translateX: -((xTranslateAmt - wHeight / 5) * 1.1) + "px",
      easing: "linear",
      elasticity: 200,
      duration: 0,
    });
  });
});
// 2
jQuery(".fp-slider-items").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1200,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
