$('img').on('error', function () {
	$(this).attr('src', './../img/holder.webp');
})



// !SLIDER
$(document).ready(function () {
	if (document.documentElement.clientWidth <= 670) {
		sliderInit();
	}

	$(window).resize(function () {
		if (document.documentElement.clientWidth <= 670) {
			sliderInit();
		}
	});

	function sliderInit() {
		$('.slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			// fade: true,
			// autoplay: true,
			// autoplaySpeed: 3000,
			dots: true,
			infinite: true,
			// centerMode: true,
		});
	}
});


