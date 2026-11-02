"use strict";
(() => {
    const openModalBtn = document.querySelector('[data-modal-open]');
    const closeModalBtn = document.querySelector('[data-modal-close]');
    const modal = document.querySelector('[data-modal]');
    const backdrop = document.querySelector('.backdrop');
    if (!openModalBtn || !closeModalBtn || !modal || !backdrop)
        return;
    function toggleModal() {
        modal?.classList.toggle('is-hidden');
    }
    openModalBtn.addEventListener('click', toggleModal);
    closeModalBtn.addEventListener('click', toggleModal);
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
            toggleModal();
        }
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('is-hidden')) {
            toggleModal();
        }
    });
})();
