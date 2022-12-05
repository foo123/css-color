"use strict";

const Color = require('../../src/js/Color.js');

let testcolor = Color.fromString('rgba(100,120,200,.4)');

console.log('rgba(100,120,200,.4)', testcolor.toString('rgba'), Color.fromString(testcolor.toString('rgba')).toString('rgba'));
console.log('rgba(100,120,200,.4)', testcolor.toString('hsla'), Color.fromString(testcolor.toString('hsla')).toString('rgba'));
console.log('rgba(100,120,200,.4)', testcolor.toString('hwb'), Color.fromString(testcolor.toString('hwb')).toString('rgba'));
