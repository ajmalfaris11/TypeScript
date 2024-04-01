// Declaring a variable 'greetings' with a type annotation of 'string'
let greetings: string = "Hello Ajmal";

// Declaring a variable 'myNum' with a type annotation of 'number'
let myNum: number = 5;

// Logging the 'greetings' variable to the console
console.log(greetings);

// Reassigning a new value to the 'greetings' variable (still of type 'string')
greetings = 'Ajmal Faris';

// Trying to call a string method on a number would cause an error, as shown below:
// myNum.toUpperCase() // Uncommenting this line will throw a compile-time error

// Calling a string method on 'greetings' (valid operation)
greetings.toLocaleLowerCase();



//  number
let userId = 334455 // type inferencess :- in typescript we dont need to mention the variable type when we assigning it that is a good practice


//  boolean
let isLoggedIn = false // :boolean this is not mandatory right now











// Using `export {}` to make this file a module and avoid global scope issues
export {};
