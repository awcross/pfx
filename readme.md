# pfx [![Build Status](https://travis-ci.org/awcross/pfx.svg?branch=master)](https://travis-ci.org/awcross/pfx)

> Browser vendor prefix helper


## Install

```
$ npm install --save pfx
```


## Usage

```js
const pfx = require('pfx');

const boxReflect = pfx('boxReflect');
//=> boxReflect === 'WebkitBoxReflect' in Webkit browsers

const transition = pfx('transition');
//=> transition === 'MozTransition' in old Firefox
```

If you want to get the hyphenated form to use with css, you can use the following syntax.

```js
const pfx = require('pfx');

const boxReflect = pfx.css('boxReflect');
//=> boxReflect === '-webkit-box-reflect' for Webkit browsers
```


## API

### pfx(prop)

Takes a string in camelCase style and returns the version of the property that the browser supports.

#### prop

Type: `string`


## License

MIT © [Alex Cross](https://alexcross.io)
