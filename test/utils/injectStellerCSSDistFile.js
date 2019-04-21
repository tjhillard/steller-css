'use strict';

module.exports = (document, css) => {
	const style = document.createElement('style');
	style.type = 'text/css';
	document.head.appendChild(style);
	style.appendChild(document.createTextNode(css.toString()));
	return document;
};
