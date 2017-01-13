# pfx [![Build Status](https://travis-ci.org/awcross/pfx.svg?branch=master)](https://travis-ci.org/awcross/pfx)

> Browser vendor prefix helper

Inspired by `Modernizr.prefixed` and `Modernizr.prefixedCSS` from [Modernizr](https://modernizr.com).


## Install

```
$ npm install --save pfx
```


## Usage

```js
const pfx = require('pfx');

const boxReflect = pfx('boxReflect');
// boxReflect === 'WebkitBoxReflect' in Webkit browsers

const transition = pfx('transition');
// transition === 'MozTransition' in old Firefox
```

By default, the property is checked against a DOM element. If you want to check again a different element, pass it in as the second argument.

```js
const rAF = pfx('requestAnimationFrame', window);
// rAF === 'MozRequestAnimationFrame' in old Firefox
```

You can also get the *function* by passing in the value `true` as the third argument.

```js
const rAF = pfx('requestAnimationFrame', window, true);
// typeof rAF === 'function'

rAF(() => {
	// do something
});
```

If you want to get the hyphenated form to use with css, you can use the following syntax.

```js
const boxReflect = pfx.css('boxReflect');
// boxReflect === '-webkit-box-reflect' for Webkit browsers
```


## API

### pfx(prop [, element] [, function])

Takes a string in camelCase style and returns the version of the property that the browser supports.

#### prop

Type: `string`

#### element

Type: `object`

#### function

Type: `boolean` `object`


## Related

- [pfx-animation](https://github.com/awcross/pfx-animation) - Browser prefix helper for animation event
- [pfx-transition](https://github.com/awcross/pfx-transition) - Browser prefix helper for transition event


## License

MIT © [Alex Cross](https://alexcross.io)
