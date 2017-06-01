// Before/after slider
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

// wow.js
wow = new WOW (
{
	mobile: false
}
)
wow.init();

// Form calculator
function f(){
	var n1=document.getElementById('square').value;
	var n2=n1*650;
	document.getElementById('calc').innerHTML = n2; 
	document.getElementById('price').value=n2;
}

// Masked input
jQuery(function($){
	$("[id=phone]").mask("+7 (999) 999-9999");
});

// square mask

$('#square').bind("change keyup input click", function() {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
});
// name mask

$(function() {
  jQuery(function($) {
    $('[id=name]').on('keypress', function() {
      var that = this;
      setTimeout(function() {
        var res = /[^а-яА-Я-a-zA-Z ]/g.exec(that.value);
        that.value = that.value.replace(res, '');
      }, 0);
    });
  });
})

// Fancybox
$(document).ready(function() {
	$(".fancybox").fancybox();
});

// ajax form
$(document).ready(function() {

    //E-mail Ajax Send
    $("#count").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: '../php/count.php', //Change
            data: th.serialize()
        }).done(function() {
            alert('Спасибо!');
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    $("#call").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../php/call.php", //Change
            data: th.serialize()
        }).done(function() {
            alert('Спасибо!');
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    $("#discount").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../php/discount.php", //Change
            data: th.serialize()
        }).done(function() {
            alert('Спасибо!');
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});