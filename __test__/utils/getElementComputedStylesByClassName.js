module.exports = getElementComputedStylesByClassName = (className) => {
	const el = document.querySelector(className);
	return getComputedStyle(el);
};
