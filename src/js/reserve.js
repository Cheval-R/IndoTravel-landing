// * Date

const formDateWrapper = $('.select--date');
const formDatePopup = $('#form-popup-date');
const formMonthItem = $('.popup__month-item');
const formDaysList = $('.popup__days-list');
formDatePopup.slideUp();
formDaysList.hide(300);

formDateWrapper.on('click', function (event) {
	formDatePopup.slideToggle();
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
formMonthItem.on('click', function (event) {
	let text = event.currentTarget.innerText;
	for (let i = 0; i < monthArray.length; i++) {
		// !Проверка совпадения месяца
		if (text.includes(monthArray[i])) {
			// !Удаляем активный класс если он есть
			formMonthItem.each(function () {
				$(this).removeClass('popup__month-item--active');
			});
			// !Добавляем активный класс для выбранного месяца
			$(event.currentTarget).addClass('popup__month-item--active');

			let nextMonth = takeNextMonth(i);
			let currentMonth = takeCurrentMonth(i);
			formDaysList.fadeOut(300);
			// !Вносим список дней на страницу
			setTimeout(() => {
				formDaysList.html(`
					<li class="popup__days-item" tabindex="0">4.${currentMonth} - 18.${currentMonth}</li>
					<li class="popup__days-item" tabindex="0">7.${currentMonth} - 21.${currentMonth}</li>
					<li class="popup__days-item" tabindex="0">12.${currentMonth} - 26.${currentMonth}</li>
					<li class="popup__days-item" tabindex="0">20.${currentMonth} - 6.${nextMonth}</li>
				`);
			}, 300);

			// !Анимация появления столбца с днями
			formDaysList.fadeIn(300);

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
	if (!formDatePopup.is(event.target) && formDatePopup.has(event.target).length === 0 && !formDateWrapper.is(event.target) && formDateWrapper.has(event.target).length === 0) {
		formDatePopup.slideUp(300);
	}
})

const dateInput = $('#date');
const formDatePlaceholder = $('#form-date-placeholder');
// console.log(formDatePlaceholder.text());
const dateBtn = $('#form-button-date');
dateBtn.on('click', function (event) {
	if (selectedDays !== undefined && selectedDays !== null) {
		formDatePlaceholder.text(selectedDays);
		dateInput.val(selectedDays);
		console.log('dateInput.val(): ' + dateInput.val());
		$('.select--date').css({
			'outline': "none"
		})
		formDatePopup.slideToggle(300);
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


function translateDateRange(dateRange) {
	// Создаем массив с названиями месяцев
	const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

	// Разбиваем входной диапазон дат на отдельные даты
	const dates = dateRange.split(' - ');
	console.log(dates);

	// Функция для перевода одной даты
	function translateDate(date) {
		const [day, month] = date.split('.');
		return `${parseInt(day)} ${months[parseInt(month) - 1]}`;
	}

	// Переводим каждую из дат
	const translatedDates = dates.map(translateDate);

	// Соединяем переведенные даты в новый диапазон
	return translatedDates.join(' - ');
}




// * People

const formPeopleWrapper = $('.select--people');
const formPeoplePopup = $('#form-popup-people');
const formPeoplePlaceholder = $('#form-people-placeholder');
formPeoplePopup.slideUp();

let selectedNumber;
let peopleResult;
const peopleInput = $('#people');
$('.popup__people-list').on('click', '.popup__people-item--form', function (event) {
	selectedNumber = $(this).text();
	let people = 'человек';
	if (selectedNumber === '2' || selectedNumber === '3' || selectedNumber === '4') {
		people = 'человека'
	}
	peopleResult = selectedNumber + " " + people;
	formPeoplePlaceholder.text(peopleResult);
	console.log('selectedNumber: ' + selectedNumber);
	peopleInput.val(selectedNumber);
	console.log('peopleInput.val(): ' + peopleInput.val());
	$('.select--people').css({
		'outline': "none"
	})
	formPeoplePopup.slideToggle(300);
});

formPeopleWrapper.on('click', function (event) {
	formPeoplePopup.slideToggle();
});


$(document).click(function (event) {
	if (!formPeoplePopup.is(event.target) && formPeoplePopup.has(event.target).length === 0 && !formPeopleWrapper.is(event.target) && formPeopleWrapper.has(event.target).length === 0) {
		formPeoplePopup.slideUp(300);
	}
})

// * Options

const formOptionsWrapper = $('.select--options');
const formOptionsPopup = $('#form-popup-options');
formOptionsPopup.slideUp();



formOptionsWrapper.on('click', function (event) {
	formOptionsPopup.slideToggle();
});

const formOptionsList = $('#form-options-list');
const formOptionsBtn = $('#form-button-options');

const formOptionsPlaceholder = $('#form-options-placeholder');
formOptionsList.on('click', '.popup__options-item--form', function (event) {
	// console.log($(this).text());
	$(this).toggleClass('popup__options-item--checked');
});

const optionsInput = $('#options');
formOptionsBtn.on('click', function () {
	let selectedOptions;
	formOptionsList.children('.popup__options-item--checked').each(function () {
		if (selectedOptions) {
			selectedOptions = selectedOptions + ', ' + $(this).text().toLowerCase()
			// console.log(selectedOptions);
		}
		else selectedOptions = $(this).text();
	});

	if (selectedOptions !== undefined && selectedOptions !== null) {
		// console.log(selectedOptions);
		formOptionsPlaceholder.text(selectedOptions);
		optionsInput.val(selectedOptions);
		console.log('optionsInput.val(): ' + optionsInput.val());
		$('.select--options').css({
			'outline': "none"
		})
		formOptionsPopup.slideToggle(300);
	}
	else {
		formOptionsPlaceholder.text('Выбери нужные опции');
		optionsInput.val('');
		console.log('optionsInput.val(): ' + optionsInput.val());

		formOptionsPopup.slideToggle(300);
	}
})


$(document).click(function (event) {
	if (!formOptionsPopup.is(event.target) && formOptionsPopup.has(event.target).length === 0 && !formOptionsWrapper.is(event.target) && formOptionsWrapper.has(event.target).length === 0) {
		formOptionsPopup.slideUp(300);
	}
})





const nameInput = document.querySelector('#name');
const mailInput = document.querySelector('#mail');
const telinput = document.querySelector('#tel');

const telMask = new Inputmask('+7 (999) 999-99-99', { "placeholder": "+7 (***) ***-**-**" });
telMask.mask(telinput);


const namePlaceholder = nameInput.placeholder;
nameInput.addEventListener('mouseover', () => {
	nameInput.placeholder = 'Фамилия Имя Отчество';
})

nameInput.addEventListener('mouseout', () => {
	nameInput.placeholder = namePlaceholder;
})
const mailPlaceholder = mailInput.placeholder;
mailInput.addEventListener('mouseover', () => {
	mailInput.placeholder = '___@___.__';
})

mailInput.addEventListener('mouseout', () => {
	mailInput.placeholder = mailPlaceholder;
})



const validator = new JustValidate('.form', {
	errorLabelCssClass: 'select-error'
});

validator
	.addField('#date', [
		{
			rule: 'required',
			errorMessage: 'Выберите дату',
		},
	])
	.addField('#people', [
		{
			rule: 'required',
			errorMessage: 'Укажите количество человек',
		},
	])
	.addField('#name', [
		{
			rule: 'required',
			errorMessage: 'Введите ваш ФИО',
		},
		{
			rule: 'customRegexp',
			value: /^[А-Яа-я]{2,}\s[А-Яа-я]{2,}\s[А-Яа-я]{2,}$/,
			errorMessage: 'Некорректный ввод'
		}
	])
	.addField('#mail', [
		{
			rule: 'required',
			errorMessage: 'Введите email',
		},
		{
			rule: 'email',
			errorMessage: 'Некорректный email'
		}
	])
	.addField('#tel', [
		{
			rule: 'required',
			errorMessage: 'Введите телефон',
		},
		{
			validator(value) {
				const phone = telinput.inputmask.unmaskedvalue();
				return !!(Number(phone) && phone.length === 10);
			},
			errorMessage: 'Некорректный номер',
		},
	]
	)
	.onSuccess(event => {
		event.preventDefault(); // Prevent the default form submission
		console.log(event);
		const target = event.target;
		const formData = {
			date: dateInput.val(),
			people: peopleInput.val(),
			options: optionsInput.val(),
			name: $('#name').val(),
			mail: $('#mail').val(),
			tel: $('#tel').val(),
		};

		$('.form__details').text(`${translateDateRange(dateInput.val())}, ${peopleResult}`);
		$('.form__price').text(`${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}₽`);
		
		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/posts',
			type: 'POST',
			data: formData,
			success(data) {
				console.log(data);
			},
			error() {
				console.log('err');
			}
		});
	});








