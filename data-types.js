// TODO: What Are Data Types
//? Every variable has a data type that indicates what kind of data is being stored in a variable.
//? There are two types of data types in JavaScript:
//* Examples are:
//? Primitive Data Types
//? Non-Primitive Data Types

// TODO: Primitive Data Types
//? The predefined data types provided by JavaScript are known as primitive data types.
//? They are also known as built-in data types.
//* Examples are:
//? Number, String, Boolean, Undefined, Null, BigInt, Symbol.

//! Number:
//? Can be used to hold decimal values and non-decimal values.
//* Example:
let x = 250;
let y = 40.5;
console.log('Value of x:', x);
console.log('Value of y:', y);

//! String:
//? Can be used to hold a sequence of characters that are surrounded by single or double quotes.
//* Example:
let str = 'hello world';
let str1 = "hello world 1";
console.log('Value of str:', str);
console.log('Value of str1:', str1);

//! Undefined:
//? The meaning of undefined is 'value is not assigned'
//? and it is a special placeholder for variables in the execution context.
//* Example:
//let x is not declared yet
console.log("Value of x is not assigned yet");

//! Null:
//? This data type can hold only one possible value, which is null.
//* Example:
let z = null;
console.log('Value of z:', z);

//! BigInt:
//? This data type can represent numbers greater than 2^53-1,
//? which helps to perform operations on large numbers.
//? The number is specified by writing ‘n’ at the end of the value.
//* Example:
var bigNum = 123422222222222222222222222222222222222n;
console.log(bigNum);

//! Symbol:
//? This data type is used to create objects which will always be unique.
//? These objects can be created using the Symbol constructor.
//* Example:
var sym = Symbol("Hello");
console.log(typeof sym);
console.log(sym);

// TODO: Non-Primitive Data Types
//? The data types are derived from primitive data types known as non-primitive data types.
//? It is also known as derived data types or reference data types.
//* Example:
//? Object, Array

//! Object:
//? An object in JavaScript is an entity having properties and methods.
//? Everything is an object in JavaScript.
//! How to create an object in JavaScript?
//* Example:
//? Constructor method
// Create an empty object
let obj = new Object();
console.log('obj', obj); // {}

// Create a user-defined object
let name, model, year;
function Car(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
}
let myCar = new Car('Toyota', 'SClass', '2023');
console.log('myCar name', myCar.name); // Toyota
console.log('myCar model', myCar.model); // SClass
console.log('myCar year', myCar.year); // 2023

//? Literal notation
// An empty object
let square = {}; // {}
let circle = { a: 20, b: 30 }; // {a: 20, b:30}

//! Array:
//? With the help of an array, we can store more than one value with the same name.
//* Example: Single-dimensional array
let p = [];
// Call it with no arguments
let q = new Array(); // []
// Call it with a single numeric argument
let l = new Array(20); // 20
// Call it with two or more arguments
let j = new Array(1, 2, 3, 'sandeep'); // 1,2,3,sandeep

// Note: JavaScript does not support two-dimensional arrays, but we can achieve this by creating an array of an array.

//! Difference between Primitive vs Non-Primitive:

//! Primitive Data
//? Primitive Data types are predefined.
//? Primitive Data types will have certain values.
//? Size depends on the type of data structure.
//? Examples are numbers and strings.
//? It can start with a lowercase.

//! Non-Primitive
//? Non-Primitive data types are created by the programmer
//? Non-primitive datatypes can be null.
//? Size is not fixed.
//? Examples are object, arrays, and linked lists.
//? It can start with uppercase.
