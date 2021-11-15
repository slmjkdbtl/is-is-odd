A [major security issue](https://github.com/slmjkdbtl/is-is-odd/issues/4) is found, this library is currently **NOT SAFE** to use.

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
Some functions are not `is-odd` but they might make you *think* they're `is-odd`, this package helps you identify these functions with a simple interface

## Used By
- [is-ten](https://github.com/animate-object/is-ten)

