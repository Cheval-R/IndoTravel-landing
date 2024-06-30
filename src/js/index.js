// !BURGER


const burgerBtn = $('#burger');
const nav = $('#nav');
const navLink = $('.nav__link');


burgerBtn.on('click', function (event) {
	if (!burgerBtn.hasClass('active')) {
		nav.slideDown(300);
		burgerBtn.addClass('active');
	}
	else if (burgerBtn.hasClass('active')) {
		nav.slideUp(300);
		burgerBtn.removeClass('active');
	}
});


navLink.on('click', function (event) {
	nav.slideUp(300);
	burgerBtn.removeClass('active');
})


// !SWIPER
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
		fade: true,
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		infinite: true,
		centerMode: true,
	});
}

