const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('body'); // Ganti dengan elemen atau kelas yang ingin Anda lindungi

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.webkitUserSelect = 'none'; // Untuk browser berbasis WebKit
        elements[i].style.userSelect = 'none'; // Standar CSS
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
