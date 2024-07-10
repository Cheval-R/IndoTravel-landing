// !CALCULATOR
const priceBtn = $('.price__button');

// * Date

const dateWrapper = $('#calc-select-date');
const datePopup = $('#calc-popup-date');
const monthList = $('.popup__month-list');
const monthItem = $('.popup__month-item--calc');
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
			// setTimeout(() => {
			daysList.html(`
					<li class="popup__days-item" tabindex="0">4.${currentMonth} - 18.${currentMonth}</li>
					<li class="popup__days-item" tabindex="0">7.${currentMonth} - 21.${currentMonth}</li>
					<li class="popup__days-item" tabindex="0">12.${currentMonth} - 26.${currentMonth}</li>
					<li class="popup__days-item" tabindex="0">20.${currentMonth} - 6.${nextMonth}</li>
				`);
			// }, 300);

			// !Анимация появления столбца с днями
			daysList.fadeIn(300);

			$('.popup__days-list').on('click', '.popup__days-item', function (event) {
				// console.log($(this).text()); // Вывод текста кликнутого элемента для примера
				$('.popup__days-item').each(function () {
					$(this).removeClass('popup__days-item--active');
				});
				$(this).addClass('popup__days-item--active'); // Добавление класса активности к кликнутому элементу
				selectedDays = $(this).text();
				// console.log(selectedDays);
			});
		}
	}
});

$(document).click(function (event) {
	if (!datePopup.is(event.target) && datePopup.has(event.target).length === 0 && !dateWrapper.is(event.target) && dateWrapper.has(event.target).length === 0) {
		datePopup.slideUp(300);
	}
})

const datePlaceholder = $('#calc-date-placeholder');
// console.log(datePlaceholder.text());
const dateBtn = $('#calc-button-date');
dateBtn.on('click', function (event) {
	if (selectedDays !== undefined && selectedDays !== null) {
		datePlaceholder.text(selectedDays);
		priceBtn.text('Узнать цену');
		$('.select--date').css({
			'outline': "none"
		})
		datePopup.slideToggle(300);
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

const peopleWrapper = $('#calc-select-people');
const peoplePopup = $('#calc-popup-people');
const peopleList = $('.popup__people-list');
const peoplePlaceholder = $('#calc-people-placeholder');
peoplePopup.slideToggle();
let selectedNumber;
$('.popup__people-list').on('click', '.popup__people-item--calc', function (event) {
	selectedNumber = $(this).text();
	let people = 'человек';
	if (selectedNumber === '2' || selectedNumber === '3' || selectedNumber === '4') {
		people = 'человека'
	}
	peoplePlaceholder.text(selectedNumber + " " + people);
	priceBtn.text('Узнать цену');
	$('.select--people').css({
		'outline': "none"
	})
	peoplePopup.slideToggle(300);
});

peopleWrapper.on('click', function (event) {
	peoplePopup.slideToggle();
});


$(document).click(function (event) {
	if (!peoplePopup.is(event.target) && peoplePopup.has(event.target).length === 0 && !peopleWrapper.is(event.target) && peopleWrapper.has(event.target).length === 0) {
		peoplePopup.slideUp(300);
	}
})

// * Options

const optionsWrapper = $('#calc-select-options');
const optionsPopup = $('#calc-popup-options');
optionsPopup.slideToggle();



optionsWrapper.on('click', function (event) {
	optionsPopup.slideToggle();
});

const optionsList = $('.popup__options-list--calc');
const optionsItem = $('.popup__options-item--calc');
const optionsBtn = $('#calc-button-options');

const optionsPlaceholder = $('#calc-options-placeholder');
optionsList.on('click', '.popup__options-item', function (event) {
	// console.log($(this).text());
	$(this).toggleClass('popup__options-item--checked');
});

optionsBtn.on('click', function () {
	let selectedOptions;
	const optionsItem = $('.popup__options-item');
	optionsList.children('.popup__options-item--checked').each(function () {
		if (selectedOptions) {
			selectedOptions = selectedOptions + ', ' + $(this).text().toLowerCase()
			console.log(selectedOptions);
		}
		else selectedOptions = $(this).text();
	});

	if (selectedOptions !== undefined && selectedOptions !== null) {
		// console.log(selectedOptions);
		optionsPlaceholder.text(selectedOptions);
		priceBtn.text('Узнать цену');
		$('.select--options').css({
			'outline': "none"
		})
		optionsPopup.slideToggle(300);
	}
	else {
		optionsPlaceholder.text('Выбери нужные опции');
		optionsPopup.slideToggle(300);
	}
})


$(document).click(function (event) {
	if (!optionsPopup.is(event.target) && optionsPopup.has(event.target).length === 0 && !optionsWrapper.is(event.target) && optionsWrapper.has(event.target).length === 0) {
		optionsPopup.slideUp(300);
	}
})

// !РАСЧЕТ СТОИМОСТИ

priceBtn.on('click', function () {
	if (datePlaceholder.text() === 'Выбери дату путешествия') {
		$('#calc-select-date').css({
			'outline': "1px solid rgba(255, 0, 0, 0.5)"
		})
	}
	if (peoplePlaceholder.text() === 'Укажи количество человек') {
		$('#calc-select-people').css({
			'outline': "1px solid rgba(255, 0, 0, 0.5)"
		})
	}

	if (datePlaceholder.text() !== 'Выбери дату путешествия' && peoplePlaceholder.text() !== 'Укажи количество человек')
		priceBtn.text('2 393 9393₽');
});