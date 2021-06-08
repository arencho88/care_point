// навигация в шапке =================/
let nav = document.querySelector('.header__nav');
let burgerBtn = document.querySelector('.header__burger-btn');

nav.classList.remove('header__nav--nojs');

burgerBtn.onclick = toggleMenu;

function toggleMenu() {
	if (nav.classList.contains('header__nav--closed')) {
		nav.classList.remove('header__nav--closed');
		nav.classList.add('header__nav--opened');
	} else {
		nav.classList.remove('header__nav--opened');
		nav.classList.add('header__nav--closed');
	}
}


// аккордеон =========================/
let accTriggers = document.getElementsByClassName('creative__item-trigger');
let accContents = document.getElementsByClassName('creative__item-content');

for (var i = 0; i < accTriggers.length; i++) {
	accTriggers[i].addEventListener('click', accToggle);
}

function accToggle() {
	let parent = this.parentNode;
	let content = this.nextElementSibling;
	
	if (!parent.classList.contains('creative__item--current')) {
		for (var i = 0; i< accTriggers.length; i++) {
			accTriggers[i].parentNode.classList.remove('creative__item--current')
			accContents[i].style.maxHeight = null;
		}
		parent.classList.add('creative__item--current');
		content.style.maxHeight = content.scrollHeight + 'px';
	}
}
