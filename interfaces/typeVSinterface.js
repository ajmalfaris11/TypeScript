// In TypeScript, both type and interface are used to define the structure of objects.
// However, they have subtle differences and can be used in slightly different ways.
// Creating an object 'ajmal' of type 'User'
var ajmal = {
    dbId: 5234223525, // dbId of the user
    email: "ajmalfaris.me@gmail.com", // User's email
    userId: 333, // User ID
    // Implementing 'startTrail' method, which returns a string
    startTrail: function () {
        return "interface trail";
    },
    // Implementing 'endTrail' method, which returns a string
    endTrail: function () {
        return "interface trail";
    },
    // Implementing 'getCoupon' method, which accepts a coupon name and returns the coupon value
    getCoupon: function (name) {
        return 10; // Hardcoded coupon value of 10 for the given coupon name
    },
    // Adding the new 'githubToken' property
    githubToken: "ajmalfaris11"
};
// Creating an object 'ajmalFaris' of type 'Admin' that extends from 'User'
var ajmalFaris = {
    dbId: 5234223525,
    email: "ajmalfaris.me@gmail.com",
    userId: 333,
    startTrail: function () {
        return "interface trail";
    },
    endTrail: function () {
        return "interface trail";
    },
    getCoupon: function (name) {
        return 10;
    },
    githubToken: "ajmalfaris11", // Inheriting from 'User'
    role: "Leader" // Role specific to 'Admin'
};
