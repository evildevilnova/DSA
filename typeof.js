// Basics
console.log(typeof 123);       // "number"
console.log(typeof "abc");     // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol());  // "symbol"
console.log(typeof 123n);      // "bigint"


// Tricky ones
console.log(typeof null);          // ❓ "object" (bug in JS since 1995)
console.log(typeof NaN);           // "number" (NaN is still a number)
console.log(typeof []);            // "object" (arrays are objects)
console.log(typeof {});            // "object"
console.log(typeof function(){});  // "function" (special case)
console.log(typeof class A {});    // "function" (classes are functions internally)


// Weird / Edge cases
console.log(typeof typeof 123); // "string"  (because typeof 123 → "number", and typeof "number" → "string")
console.log(typeof new String("hi")); // "object" (not "string")
console.log(typeof new Number(5));   // "object"
console.log(typeof new Boolean(false)); // "object"


// Using constructor property
console.log((123).constructor);      // [Function: Number]
console.log(("hello").constructor);  // [Function: String]
console.log(([1,2,3]).constructor);  // [Function: Array]
console.log(({}).constructor);       // [Function: Object]
console.log(undefined.constructor); // ❓ TypeError: Cannot read properties of undefined (reading 'constructor')
console.log(null.constructor);      // ❓ TypeError: Cannot read properties of null (reading 'constructor')
