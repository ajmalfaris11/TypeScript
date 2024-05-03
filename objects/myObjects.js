"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "ajmal",
    email: "ajmalfaris.me@gmail.com",
    isActive: true,
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
//  createUser({name: "ajmal", isPaid: true, email: "ajmalfaris.me@gmail.com"}) ----> wont work because email didnt set
var newUser = { name: "ajmal", isPaid: true, email: "ajmalfaris.me@gmail.com" }; //----> this will work
createUser(newUser); // its a bad behaviou of the object in Ts
function createCourse() {
    return { name: "reactjs", price: 399 }; // ----> return datatypes mentioned in the method 
    // return name --------> so wont work these kind of things 
}
// Function 'create_user' takes a 'Users' object as input and returns a 'Users' object
function create_user(user) {
    // Returns a new object with default values (ignores the input 'user' object)
    return { name: "", email: "", isActive: true };
}
// Calling 'create_user' with an empty 'Users' object
create_user({ name: "", email: "", isActive: true });
