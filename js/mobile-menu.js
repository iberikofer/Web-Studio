(() => {
	const mobileMenu = document.querySelector('.js-menu-container');
	const openMenuBtn = document.querySelector('.js-open-menu');
	const closeMenuBtn = document.querySelector('.js-close-menu');

	const toggleMenu = () => {
		const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
		openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
		mobileMenu.classList.toggle('is-open');
		document.body.classList.toggle("prevent-body-scroll")
	};

	openMenuBtn.addEventListener('click', toggleMenu);
	closeMenuBtn.addEventListener('click', toggleMenu);

	const handleMediaChange = (e) => {
		if (!e.matches) return;
		mobileMenu.classList.remove('is-open');
		openMenuBtn.setAttribute('aria-expanded', false);
		document.body.classList.remove("prevent-body-scroll")
	};

	window.matchMedia('(min-width: 768px)').addEventListener('change', handleMediaChange);

	window.addEventListener('unload', () => {
		window.matchMedia('(min-width: 768px)').removeEventListener('change', handleMediaChange);
	});
})();
