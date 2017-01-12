'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function pfx(prop, elem, fn) {
	var _arguments = arguments;

	var prefixes = 'Webkit Moz O ms'.split(' ');

	var ucProp = prop[0].toUpperCase() + prop.slice(1);
	var testProp = elem === undefined || typeof elem === 'string';

	if (!testProp) {
		prefixes = prefixes.map(Function.prototype.call, String.prototype.toLowerCase);
	}

	var props = [prop, prefixes.join(ucProp + ' ') + ucProp].join(' ').split(' ');

	if (testProp) {
		var el = document.createElement('div');

		for (var i = 0, j = props.length; i < j; i++) {
			var name = props[i];

			if (name.indexOf('-') !== -1) {
				name = name.replace(/([a-z])-([a-z])/g, function (str, m1, m2) {
					return m1 + m2.toUpperCase();
				}).replace(/^-/, '');
			}

			if (el.style[name] !== undefined) {
				return name;
			}
		}
	} else {
		for (var key in props) {
			if (props[key] in elem) {
				var _ret = function () {
					if (!fn) {
						return {
							v: props[key]
						};
					}

					var item = elem[props[key]];

					if (typeof item === 'function') {
						return {
							v: function v() {
								return item.apply(elem, _arguments);
							}
						};
					}

					return {
						v: item
					};
				}();

				if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
			}
		}
	}

	return false;
}

module.exports = pfx;

module.exports.css = function (prop) {
	var name = pfx(prop, 'css');

	if (name) {
		name = name.replace(/([A-Z])/g, function (str, m1) {
			return '-' + m1.toLowerCase();
		}).replace(/^ms-/, '-ms-');
	}

	return name;
};

