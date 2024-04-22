const myModule = require('./myModule');
//const myModule = require('./myModule.js');

myModule.myFirstFunction(); // Output: "This is my first function"
myModule.mySecondFunction(); // Output: "This is my second function"


// using ES6 object destructuring, only myFirstFunction is available
const { myFirstFunction } = require('./myModule');
myFirstFunction(); // Output: "This is my first function"

// use __dirname & __filename
console.log(__dirname);   // prints 'D:\Learning\Javascript Fullstack\Project\NodeJsProj\NodeJS_Learn'
console.log(__filename);  // prints 'D:\Learning\Javascript Fullstack\Project\NodeJsProj\NodeJS_Learn\main.js'