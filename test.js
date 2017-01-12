const test = require('tape');
const m = require('./');

test('dom', t => {
	t.equal(m('boxSizing'), 'boxSizing');
	t.equal(m('box-sizing'), 'boxSizing');
	t.equal(m('boxReflect'), 'WebkitBoxReflect');
	t.equal(m('box-reflect'), 'WebkitBoxReflect');
	t.equal(m('unicorns'), false);
	t.end();
});

test('css', t => {
	t.equal(m.css('boxSizing'), 'box-sizing');
	t.equal(m.css('box-sizing'), 'box-sizing');
	t.equal(m.css('boxReflect'), '-webkit-box-reflect');
	t.equal(m.css('box-reflect'), '-webkit-box-reflect');
	t.equal(m.css('unicorns'), false);
	t.end();
});

test('dom object', t => {
	t.equal(m('requestAnimationFrame', window), 'requestAnimationFrame');
	t.equal(m('requestAnimationFrame'), false);
	t.equal(typeof m('requestAnimationFrame', window, true), 'function');
	t.equal(m('unicorns', window), false);
	t.equal(m('unicorns', window, true), false);
	t.equal(typeof m('unicorns', window, true), 'boolean');
	t.end();
});
