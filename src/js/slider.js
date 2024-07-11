
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
	// Получаем ширину экрана
	var windowWidth = $(window).width();

	// Проверяем, если ширина экрана больше или равна 900px
	if (windowWidth >= 900) {
		prevSection.on('mouseenter', function () {
			slickTrack.finish().animate({
				left: '+=300px'
			}, 200);
		});

		prevSection.on('mouseleave', function () {
			slickTrack.finish().animate({
				left: '-=300px'
			}, 200);
		});

		nextSection.on('mouseenter', function () {
			slickTrack.finish().animate({
				left: '-=300px'
			}, 200);
		});

		nextSection.on('mouseleave', function () {
			slickTrack.finish().animate({
				left: '+=300px'
			}, 200);
		});
	} else {
		// Если ширина экрана меньше 900px, убираем обработчики событий
		prevSection.off('mouseenter').off('mouseleave');
		nextSection.off('mouseenter').off('mouseleave');
	}
}

// Вызываем функцию при загрузке страницы, если ширина экрана >= 900px
if (document.documentElement.clientWidth >= 900) {
	sliderMove();
}

// Добавляем обработчик события resize для проверки ширины экрана
$(window).resize(function () {
	// Проверяем ширину экрана при изменении размера окна
	if (document.documentElement.clientWidth >= 900) {
		sliderMove();
	} else {
		// Если ширина стала меньше 900px, убираем обработчики событий
		prevSection.off('mouseenter').off('mouseleave');
		nextSection.off('mouseenter').off('mouseleave');
	}
});
