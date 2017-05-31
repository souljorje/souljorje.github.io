// Before/after slider
new Cocoen(document.querySelector('.cocoen'));

$('.feedback-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
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

// fadeInAnimation
$('.work-item').hover(
       function(){ $(this).addClass('hover') 
});

// wow.js
wow = new WOW (
	{
		mobile: false
	}
)
wow.init();