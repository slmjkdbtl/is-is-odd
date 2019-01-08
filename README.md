# is-is-odd

> check if the given function is is-odd

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save is-is-odd
```

## Usage

```js
const isOdd = require('is-odd');
const isIsOdd = require('is-is-odd');

console.log(isIsOdd(isOdd)); //=> true

console.log(isIsOdd(function() {})); //=> false

console.log(isIsOdd(function() {
	console.log("I'm is-odd");
})); //=> false
```

## Why
some functions are not is-odd but they might make you think they're is-odd, this package helps you identifies these functions with a simple interface

