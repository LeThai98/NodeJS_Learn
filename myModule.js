function myFirstFunction() {
    console.log("This is my first function");
  }
  
  function mySecondFunction() {
    console.log("This is my second function");
  }

  module.exports = {
    myFirstFunction: myFirstFunction,
    mySecondFunction: mySecondFunction
  };

  // using ES6 shorthand property names
        // module.exports = { 
        //     myFirstFunction,
        //     mySecondFunction
        // }
        