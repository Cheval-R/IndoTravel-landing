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


// ! ACCORDION


$('.accordion__wrapper').accordion({
	active: true,
	collapsible: true,
	heightStyle: 'content',
	icons: {
		header: 'acc-icon',
		activeHeader: 'acc-icon acc-icon-active',
	}
});




const accHeader = $('.accordion__title');
const bali = $('.bali')
const yava = $('.yava')
const sulavesi = $('.sulavesi')
const calimanthan = $('.calimanthan')
const sumathra = $('.sumathra')


accHeader.on('click', function (event) {
	console.log(event.currentTarget);

	if ($(this).hasClass('accordion__title--yava')) {
		if ($(this).attr('aria-expanded') === "true") {
			yava.css('fill', '#FCB500');

			bali.css('fill', '#FFFFFF');
			sulavesi.css('fill', '#FFFFFF');
			calimanthan.css('fill', '#FFFFFF');
			sumathra.css('fill', '#FFFFFF');
		} else {
			yava.css('fill', '#FFFFFF');
		}
	}
	if ($(this).hasClass('accordion__title--bali')) {
		if ($(this).attr('aria-expanded') === "true") {
			bali.css('fill', '#FCB500');

			yava.css('fill', '#FFFFFF');
			sulavesi.css('fill', '#FFFFFF');
			calimanthan.css('fill', '#FFFFFF');
			sumathra.css('fill', '#FFFFFF');
		} else {
			bali.css('fill', '#FFFFFF');
		}
	}
	if ($(this).hasClass('accordion__title--sulavesi')) {
		if ($(this).attr('aria-expanded') === "true") {
			sulavesi.css('fill', '#FCB500');


			yava.css('fill', '#FFFFFF');
			bali.css('fill', '#FFFFFF');
			calimanthan.css('fill', '#FFFFFF');
			sumathra.css('fill', '#FFFFFF');
		} else {
			sulavesi.css('fill', '#FFFFFF');
		}
	}
	if ($(this).hasClass('accordion__title--calimanthan')) {
		if ($(this).attr('aria-expanded') === "true") {
			calimanthan.css('fill', '#FCB500');

			yava.css('fill', '#FFFFFF');
			bali.css('fill', '#FFFFFF');
			sulavesi.css('fill', '#FFFFFF');
			sumathra.css('fill', '#FFFFFF');
		} else {
			calimanthan.css('fill', '#FFFFFF');
		}
	}
	if ($(this).hasClass('accordion__title--sumathra')) {
		if ($(this).attr('aria-expanded') === "true") {
			sumathra.css('fill', '#FCB500');

			yava.css('fill', '#FFFFFF');
			bali.css('fill', '#FFFFFF');
			sulavesi.css('fill', '#FFFFFF');
			calimanthan.css('fill', '#FFFFFF');
		} else {
			sumathra.css('fill', '#FFFFFF');
		}
	}
});
