new Cocoen(document.querySelector('.cocoen'));

$('.feedback-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 10000,
  arrows: true,
  prevArrow: "<div class='prev'></button",
  nextArrow: "<div class='next'></button>",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});