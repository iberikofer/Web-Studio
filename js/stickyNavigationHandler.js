let lastScrollTop = 0;

window.addEventListener("scroll", () => {
	let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
	let screenWidth = window.innerWidth || document.documentElement.clientWidth;

	if (currentScroll && screenWidth) {
		if (screenWidth > 767 || screenWidth <= 767) {
			if (currentScroll > lastScrollTop) {
				document.getElementsByTagName('header')[0].style.transform = "translateY(-105%)";
			} else {
				document.getElementsByTagName('header')[0].style.transform = "translateY(0)";
			}
			lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Safari
		}
	}
}, false);