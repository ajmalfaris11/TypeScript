"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Declaring a variable 'greetings' with a type annotation of 'string'
var greetings = "Hello Ajmal";
// Declaring a variable 'myNum' with a type annotation of 'number'
var myNum = 5;
// Logging the 'greetings' variable to the console
console.log(greetings);
// Reassigning a new value to the 'greetings' variable (still of type 'string')
greetings = 'Ajmal Faris';
// Trying to call a string method on a number would cause an error, as shown below:
// myNum.toUpperCase() // Uncommenting this line will throw a compile-time error
// Calling a string method on 'greetings' (valid operation)
greetings.toLocaleLowerCase();
//  number
var userId = 334455;
//  boolean
var isLoggedIn = false;
