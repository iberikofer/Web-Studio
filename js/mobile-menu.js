"use strict";
(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    if (!mobileMenu || !openMenuBtn || !closeMenuBtn)
        return;
    const toggleMenu = () => {
        const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
        openMenuBtn.setAttribute('aria-expanded', String(!isMenuOpen));
        mobileMenu.classList.toggle('is-open');
        document.body.classList.toggle('prevent-body-scroll');
    };
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaChange = (e) => {
        if (!e.matches)
            return;
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('prevent-body-scroll');
    };
    mediaQuery.addEventListener('change', handleMediaChange);
    window.addEventListener('unload', () => {
        mediaQuery.removeEventListener('change', handleMediaChange);
    });
})();
