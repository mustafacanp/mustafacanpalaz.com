const scrollNext = (elementName, offsetNum) => {
	const targetElement = document.getElementById(elementName);
	if (targetElement) {
		const y =
			targetElement.getBoundingClientRect().top +
			window.pageYOffset -
			offsetNum;
		window.scrollTo({ top: y });
	}
};

export default scrollNext;
