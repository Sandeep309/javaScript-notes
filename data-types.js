//! What Are Data Types
//? Every variable has a data type that indicates what kind of data is being stored in a variable.
//? There are two types of data types in JavaScript:

//* Primitive Data Types
//* Non-Primitive Data Types

//! Primitive Data Types
//? The predefined data types provided by JavaScript are known as primitive data types.
//? They are also known as built-in data types.
//* Examples are:
//? Number, String, Boolean, Undefined, Null, BigInt, Symbol.

//! Number: Can be used to hold decimal values and non-decimal values.
//* Example:

let x = 250;
let y = 40.5;
console.log('Value of x:', x);
console.log('Value of y:', y);

//! String: Can be used to hold a sequence of characters that are surrounded by single or double quotes.
//* Example:

let str = 'hello world';
let str1 = "hello world 1";
console.log('Value of str:', str);
console.log('Value of str1:', str1);

//! Undefined: The meaning of undefined is 'value is not assigned'
//! and it is a special placeholder for variables in the execution context.
//* Example:

//let x is not declared yet
console.log("Value of x is not assigned yet");

//! Null: This data type can hold only one possible value, which is null.
//* Example:

let z = null;
console.log('Value of z:', z);

//! BigInt: This data type can represent numbers greater than 2^53-1,
//! which helps to perform operations on large numbers. The number is specified by writing ‘n’ at the end of the value.
//* Example:

var bigNum = 123422222222222222222222222222222222222n;
console.log(bigNum);

//! Symbol: This data type is used to create objects which will always be unique. These objects can be created using Symbol constructor.
//* Example:

var sym = Symbol("Hello");
console.log(typeof sym);
console.log(sym);
