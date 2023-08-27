const burgerBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__item');

const handleNav = () => {
	nav.classList.toggle('nav--active');

	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});
	handleNavItemsAnimations();
};

const handleNavItemsAnimations = () => {
	let delayTime = 0;

	navItems.forEach(item => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

burgerBtn.addEventListener('click', handleNav);
