"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const capitalize = (str) => {
    const newStr = str.split(' ')
        .map(word => word[0].toUpperCase() + word.substr(1))
        .join(' ');
    return newStr;
};
const upperCase = (str) => {
    return str.toUpperCase();
};
const lowerCase = (str) => {
    return str.toLowerCase();
};
exports.default = {
    capitalize,
    upperCase,
    lowerCase
};
