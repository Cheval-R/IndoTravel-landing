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


$(document).click(function (event) {
	if (!nav.is(event.target) && nav.has(event.target).length === 0 && !burgerBtn.is(event.target) && burgerBtn.has(event.target).length === 0) {
		nav.slideUp(300);
	}
})