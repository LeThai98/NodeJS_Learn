"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
console.log(lodash_1.default.add(1, 2));
const myFunc = (num) => num * 5;
exports.default = myFunc;
