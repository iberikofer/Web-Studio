let lastScrollTop = 0;

window.addEventListener(
  'scroll',
  (): void => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;
    const header = document.querySelector<HTMLElement>('header');

    if (!header) return;

    if (currentScroll > lastScrollTop) {
      if (currentScroll > 0 && screenWidth > 767) {
        header.style.transform = 'translateY(-105%)';
      }
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Safari
  },
  false
);
