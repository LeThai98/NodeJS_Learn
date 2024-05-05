"use strict";
// NOTE: This code has not been converted to TypeScript yet
// import in JS
// const arrays = require('./utilities/arrays.js');
// const numbers = require('./utilities/numbers.js');
// const strings = require('./utilities/strings.js');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import module in TypeScript
const arrays_1 = __importDefault(require("./utilities/arrays"));
const numbers_1 = __importDefault(require("./utilities/numbers"));
const string_1 = __importDefault(require("./utilities/string"));
const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = arrays_1.default.addArr(numArr);
const mixArr = arrays_1.default.concatArr(numArr, wordArr);
// 2 ways to convert string to number in TypeScript
const myNum = '15' % 2;
const five = parseInt('5');
// results of function calls
console.log(arrays_1.default.cut3(mixArr));
console.log(numbers_1.default.sum(arrSum, myNum));
console.log(string_1.default.capitalize('the quick brown fox'));
console.log(numbers_1.default.multiply(five, 8));
console.log(arrays_1.default.lgNum(mixArr));
