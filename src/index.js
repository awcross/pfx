'use strict';

function pfx(prop, elem, fn) {
	let prefixes = 'Webkit Moz O ms'.split(' ');

	const ucProp = prop[0].toUpperCase() + prop.slice(1);
	const testProp = elem === undefined || typeof elem === 'string';

	if (!testProp) {
		prefixes = prefixes.map(Function.prototype.call, String.prototype.toLowerCase);
	}

	const props = [prop, prefixes.join(`${ucProp} `) + ucProp].join(' ').split(' ');

	if (testProp) {
		const el = document.createElement('div');

		for (let i = 0, j = props.length; i < j; i++) {
			let name = props[i];

			if (name.indexOf('-') !== -1) {
				name = name.replace(/([a-z])-([a-z])/g, (str, m1, m2) => {
					return m1 + m2.toUpperCase();
				}).replace(/^-/, '');
			}

			if (el.style[name] !== undefined) {
				return name;
			}
		}

	} else {
		for (const key in props) {
			if (props[key] in elem) {
				if (!fn) {
					return props[key];
				}

				const item = elem[props[key]];

				if (typeof item === 'function') {
					const obj = typeof fn === 'object' ? fn : elem;

					return function () {
						return item.apply(obj, arguments);
					};
				}

				return item;
			}
		}
	}

	return false;
}

module.exports = pfx;

module.exports.css = prop => {
	let name = pfx(prop, 'css');

	if (name) {
		name = name.replace(/([A-Z])/g, (str, m1) => {
			return '-' + m1.toLowerCase();
		}).replace(/^ms-/, '-ms-');
	}

	return name;
};
