# Primitive and Non-Primitive data types

Tags: Theory
Created time: January 1, 2024 12:31 AM
Last edited time: January 11, 2024 4:51 PM

## What Are Data Types

- Every variable has a data type that indicates what kind of data is being stored in a variable.
- There are two types of data types in JavaScript:
    1. Primitive Data Types
    2. Non-Primitive Data Types

## Primitive Data Types

- The predefined data types provided by JavaScript are known as primitive data types, also known as built-in data types.
- A primitive value is a value that has no properties or methods.
- Primitive values are immutable (they are hardcoded and cannot be changed).
- if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.
- **Examples:** `Number`, `String`, `Boolean`, `Undefined`, `Null`, `BigInt`, `Symbol`.

### Number

- Can be used to hold decimal values and non-decimal values.
- **Examples**: `250`, `40.5`.

### String

- Can be used to hold a sequence of characters that are surrounded by single or double quotes.
- **Examples**: `'hello world’`, `"hello world 1”`.

### Boolean

- The boolean data type can accept only two values
- **Examples**: `true` and `false`.

### Undefined

- The meaning of undefined is 'value is not assigned’
- and it is a special placeholder for `var` variables in the execution context.
- **Examples: `var x;`.**

### Null

- This data type can hold only one possible value, which is null.
- **Examples**: `let z = null;`.

### BigInt

- This data type can represent numbers greater than 2^53-1
- which helps to perform operations on large numbers
- The number is specified by writing ‘n’ at the end of the value
- **Examples:** `var bigNum = 1234222222222222222222n;`.

### Symbol

- This data type is used to create objects which will always be unique
- These objects can be created using the `Symbol()` constructor
- **Example:** `var sym = Symbol("Hello");`.

## Non-Primitive Data Types

- The data types are derived from primitive data types known as non-primitive data types
- It is also known as derived data types or reference data types
- **Example:** `Object`, `Array`.

### Object

- An object in JavaScript is an entity having properties and methods.
- objects are mutable they are addressed by reference, not by value.
- If `person` is an object, the following statement will not create a copy of person: `const x = person; // Will not create a copy of person`.
- Everything is an object in JavaScript.
- **Example:**

```jsx
// Constructor method
let obj = new Object();
console.log("obj", obj); // {}

// Create a user-defined object
let name, city, age;
function about(name, city, age) {
  this.name = name;
  this.city = city;
  this.age = age;
}

let aboutMe = new about("sandeep", "delhi", 23);
console.log("aboutMe:", aboutMe); // aboutMe: about { name: 'sandeep', city: 'delhi', age: 23 }

// Literal notation
let square = {}; // {}
let circle = { a: 20, b: 30 }; // {a: 20, b:30}
```

### Array

- With the help of an array, we can store more than one value with the same name.
- Represents an ordered list of values.
- **Examples:**

```jsx
let p = [];
// Call it with no arguments
let q = new Array(); // []

// Call it with a single numeric argument
let l = new Array(20); // 20

// Call it with two or more arguments
let j = new Array(1, 2, 3, 'sandeep'); // 1,2,3,sandeep

// Note: JavaScript does not support two-dimensional arrays, but we can achieve this by creating an array of an array.
```

## Revise

### Primitive Data Types

| Primitive Data Types | Explanation | Example |
| --- | --- | --- |
| String | Represents a sequence of characters. | "Hello World" |
| Number | Represents numeric values. | 42 |
| Boolean | Represents either true or false. | true |
| Undefined | Represents a variable that has been declared but hasn't been assigned a value yet. | let x; |
| Null | Represents the intentional absence of any object value. | null |

### Non-Primitive Data Types

| Non-Primitive Data Types | Explanation | Example |
| --- | --- | --- |
| Object | Represents a collection of key-value pairs. | { name: "John", age: 25 } |
| Array | Represents an ordered list of values. | [1, 2, 3] |
| Function | Represents a reusable block of code. | function add(a, b) { return a + b; } |

## Difference between Primitive vs Non-Primitive

| Primitive | Non-Primitive |
| --- | --- |
| Primitive data structure is a kind of data structure that stores the data of only one type. | Non-primitive data structure is a type of data structure that can store the data of more than one type. |
| Primitive Data types are predefined. | Non-Primitive data types are created by the programmer |
| Primitive Data types will have certain values. | Non-Primitive data types can be NULL. |
| Size depends on the type of data structure. | Size is not fixed |
| Examples are numbers and strings. | Examples are Array and Objects , Linked List. |
| It can start with a lowercase. | It can start with uppercase. |