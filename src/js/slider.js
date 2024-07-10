
// !SLIDER
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


// !ALBUM SLIDER

$('.album__slider').slick({
	arrows: true,
	dots: false,
	infinite: true,
	// centerMode: true,
	// centerPadding: '0%',
	variableWidth: true,
	prevArrow: $('.prev svg'),
	nextArrow: $('.next svg'),
});


const prevSection = $('.prev');
const nextSection = $('.next');
const slickTrack = $('.slick-track');

// Убедитесь, что элемент имеет позиционирование
// slickTrack.css('position', 'relative');


function sliderMove() {
	prevSection.on('mouseenter', function () {
		slickTrack.finish().animate({
			left: '+=300px'
		}, 500); // 500 - это продолжительность анимации в миллисекундах
	});

	prevSection.on('mouseleave', function () {
		slickTrack.finish().animate({
			left: '-=300px'
		}, 500); // 500 - это продолжительность анимации в миллисекундах
	});
	nextSection.on('mouseenter', function () {
		slickTrack.finish().animate({
			left: '-=300px'
		}, 500); // 500 - это продолжительность анимации в миллисекундах
	});

	nextSection.on('mouseleave', function () {
		slickTrack.finish().animate({
			left: '+=300px'
		}, 500); // 500 - это продолжительность анимации в миллисекундах
	});
}

if (document.documentElement.clientWidth >= 900) {
	sliderMove();
}

$(window).resize(function () {
	if (document.documentElement.clientWidth >= 900) {
		sliderMove();
	}
});