(() => {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
		backdrop: document.querySelector(".backdrop"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);
	refs.backdrop.addEventListener("click", (e) => {
		e.target === refs.backdrop && toggleModal()
	})
	window.addEventListener("keydown", (e) => {
		e.key === "Escape" && !refs.modal.classList.contains("is-hidden") && toggleModal()
	})

	function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
	}
})();