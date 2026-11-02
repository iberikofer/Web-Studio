(() => {
  const mobileMenu = document.querySelector<HTMLElement>('.js-menu-container');
  const openMenuBtn = document.querySelector<HTMLButtonElement>('.js-open-menu');
  const closeMenuBtn = document.querySelector<HTMLButtonElement>('.js-close-menu');

  if (!mobileMenu || !openMenuBtn || !closeMenuBtn) return;

  const toggleMenu = (): void => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
    openMenuBtn.setAttribute('aria-expanded', String(!isMenuOpen));
    mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('prevent-body-scroll');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  const mediaQuery = window.matchMedia('(min-width: 768px)');

  const handleMediaChange = (e: MediaQueryListEvent | MediaQueryList): void => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('prevent-body-scroll');
  };

  mediaQuery.addEventListener('change', handleMediaChange);

  window.addEventListener('unload', () => {
    mediaQuery.removeEventListener('change', handleMediaChange);
  });
})();
