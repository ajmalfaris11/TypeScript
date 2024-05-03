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
var newUser = { name: "ajmal", isPaid: true };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
