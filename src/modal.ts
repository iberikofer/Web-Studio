(() => {
  const openModalBtn = document.querySelector<HTMLButtonElement>('[data-modal-open]');
  const closeModalBtn = document.querySelector<HTMLButtonElement>('[data-modal-close]');
  const modal = document.querySelector<HTMLElement>('[data-modal]');
  const backdrop = document.querySelector<HTMLElement>('.backdrop');

  if (!openModalBtn || !closeModalBtn || !modal || !backdrop) return;

  function toggleModal(): void {
    modal?.classList.toggle('is-hidden');
  }

  openModalBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);

  backdrop.addEventListener('click', (e: MouseEvent) => {
    if (e.target === backdrop) {
      toggleModal();
    }
  });

  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && !modal.classList.contains('is-hidden')) {
      toggleModal();
    }
  });
})();
