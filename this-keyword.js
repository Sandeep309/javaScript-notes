// "use strict";

//? this in global space
console.log('this', this);
// globalObject - windowObject(Browser), globalObject(nodeJs)
// this keyword in global space represent the value of global Object
// value of the this will be globalObject depend on where you are running the code,
// for eg: if browser it is the value will be 'window' object and in nodeJs it will be 'global' object

//? this inside function
function x() {
    console.log('this', this);
}
x();

// this in strict mode - (this substitution)

// this value depend on how this will called (window)

// this inside a objects method

// call apply bind method (sharing method)

// this inside arrow function

// this inside nested arrow function

// this inside DOM



