/* =================================================

 Template Name:  Martin - Personal Portfolio html template
 Author: MouriTheme
 Version: 1.0
 Design and Developed by: MouriTheme

 NB: This is the main js of this theme.

 =================================================== */


//*********** Animated headline js

$('.animate-scale').animatedHeadline({
	animationType: 'clip'
});



/*smooth scroll js*/

var scroll = new SmoothScroll('a[href*="#"]');


(function ($) {
	'use strict';

	jQuery(document).ready(function ($) {


		//************ Magnific Popup

		$('.zoom,.zoom1').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});



		//*************** Isotope filter

		var $Container = $('#img-filter');
		if ($Container.length > 0) {
			$Container.isotope({
				itemSelector: '.single-port',
				transitionDuration: '0.8s'
			});
			$(".img-filter").on("click", function (e) {
				$(".img-filter.active").removeClass("active");
				$(this).addClass("active");
				var selector = $(this).attr('data-filter');
				$Container.isotope({
					filter: selector
				});
				return false;
			});

			$(window).resize(function () {
				setTimeout(function () {
					$Container.isotope();
				}, 1000);
			}).trigger('resize');
		}


	});


	//*************** Testimonial carousel

	$('.owl-carousel.testimonial-carousel').owlCarousel({
		nav: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			680: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});





})(jQuery);