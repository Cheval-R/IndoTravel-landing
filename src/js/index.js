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



// !CALCULATOR
const priceBtn = $('.price__button');

// * Date

const dateWrapper = $('.price__input--date');
const datePopup = $('.popup--date');
const monthList = $('.popup__month-list');
const monthItem = $('.popup__month-item');
const daysList = $('.popup__days-list');
datePopup.slideToggle();
daysList.hide(300);

dateWrapper.on('click', function (event) {
	datePopup.slideToggle();
});


const monthArray = [
	"Январь",
	"Февраль",
	"Март",
	"Апрель",
	"Май",
	"Июнь",
	"Июль",
	"Август",
	"Сентябрь",
	"Октябрь",
	"Ноябрь",
	"Декабрь"
];

let selectedDays;
// ! Обработка выбора месяца
monthItem.on('click', function (event) {
	let text = event.currentTarget.innerText;
	for (let i = 0; i < monthArray.length; i++) {
		// !Проверка совпадения месяца
		if (text.includes(monthArray[i])) {
			// !Удаляем активный класс если он есть
			monthItem.each(function () {
				$(this).removeClass('popup__month-item--active');
			});
			// !Добавляем активный класс для выбранного месяца
			$(event.currentTarget).addClass('popup__month-item--active');

			let nextMonth = takeNextMonth(i);
			let currentMonth = takeCurrentMonth(i);
			daysList.fadeOut(300);
			// !Вносим список дней на страницу
			setTimeout(() => {
				daysList.html(`
					<li class="popup__days-item" tabindex="0">4.${currentMonth} - 18.${currentMonth}</li>
					<li class="popup__days-item" tabindex="0">7.${currentMonth} - 21.${currentMonth}</li>
					<li class="popup__days-item" tabindex="0">12.${currentMonth} - 26.${currentMonth}</li>
					<li class="popup__days-item" tabindex="0">20.${currentMonth} - 6.${nextMonth}</li>
				`);
			}, 300);

			// !Анимация появления столбца с днями
			daysList.fadeIn(300);

			$('.popup__days-list').on('click', '.popup__days-item', function (event) {
				console.log($(this).text()); // Вывод текста кликнутого элемента для примера
				$('.popup__days-item').each(function () {
					$(this).removeClass('popup__days-item--active');
				});
				$(this).addClass('popup__days-item--active'); // Добавление класса активности к кликнутому элементу
				selectedDays = $(this).text();
				console.log(selectedDays);
			});
		}
	}
});

const datePlaceholder = $('.price__placeholder--date');
console.log(datePlaceholder.text());
const dateBtn = $('.popup__button--date');
dateBtn.on('click', function (event) {
	if (selectedDays !== undefined && selectedDays !== null) {
		datePlaceholder.text(selectedDays);
		priceBtn.text('Узнать цену');
	}
});

function takeCurrentMonth(i) {
	let currentMonth = i + 1;
	// !Получаем текущий месяц числом
	if (i < 10) {
		currentMonth = '0' + currentMonth;
	}
	else if (i === 11) {
		currentMonth = 12;
	} else if (i === 12) {
		currentMonth = '01';
	}
	return currentMonth;
}
// !Получаем следующий месяц числом
function takeNextMonth(i) {
	let nextMonth = i + 2;
	if (i < 10) {
		nextMonth = '0' + nextMonth;
	}
	else if (i === 11) {
		nextMonth = '01';
	} else if (i === 12) {
		nextMonth = '02';
	}
	return nextMonth;
}



// * People

const peopleWrapper = $('.price__input--people');
const peoplePopup = $('.popup--people');
const peopleList = $('.popup__people-list');
const peoplePlaceholder = $('.price__placeholder--people');
peoplePopup.slideToggle();
let selectedNumber;
$('.popup__people-list').on('click', '.popup__people-item', function (event) {
	selectedNumber = $(this).text();
	peoplePlaceholder.text(selectedNumber);
	priceBtn.text('Узнать цену');
});

peopleWrapper.on('click', function (event) {
	peoplePopup.slideToggle();
});

// * Options

const optionsWrapper = $('.price__input--options');
const optionsPopup = $('.popup--options');
optionsPopup.slideToggle();


optionsWrapper.on('click', function (event) {
	optionsPopup.slideToggle();
});