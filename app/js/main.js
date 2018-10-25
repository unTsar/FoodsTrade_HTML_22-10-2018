$('.preview-slider').slick({
     slidesToShow: 1,
     autoplay: false,
     autoplaySpeed: 1500,
    arrows : false,
    dots: true,
  });

var elements = $('.modal-overlay, .modal');

$('.modal-href').click(function(){
    elements.addClass('active');
});

$('.close-modal').click(function(){
    elements.removeClass('active');
});

$(document).ready(function(){
			var touch = $('#touch-menu');
		    var menu = $('.nav');
		 
		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 800 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
		});