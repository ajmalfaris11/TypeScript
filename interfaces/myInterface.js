// Interface in TypeScript defines the structure of an object, including the properties and methods it should have.
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
    }
};
