// Union type allowing variable 'score' to be either a number or a string
var score = 33;
score = 44;
score = "55"; // 'score' can be a string as well
// Variable 'Ajmal' can be of type 'User' or 'Admin'
var Ajmal = {
    username: "ajmal",
    id: 32
};
// Reassigning 'Ajmal' to an object of type 'User'
Ajmal = {
    name: "ajmal",
    phone: 11,
    id: 32
};
// Function 'getDbId' accepting either a number or string for 'id' and performing type-specific actions
function getDbId(id) {
    // Type guarding to use string-specific method 'toLowerCase' or perform number-specific operation
    if (typeof id === "string") {
        id.toLowerCase(); // String-specific operation
    }
    else {
        id * 2; // Number-specific operation
    }
    console.log("DB id is: ".concat(id));
}
getDbId(11); // Calling function with a number
getDbId("11"); // Calling function with a string
// Example of arrays in TypeScript with type annotations
// Array containing only numbers
var data1 = [1, 2, 3];
// Array containing only strings
var data2 = ["1", "2", "3"];
// Array that can contain either numbers or strings (not mixed)
var data3 = [1, 2, 3];
// Array that can contain numbers, strings, or booleans (mixed types)
var data4 = [1, 2, 3, "4", "5", "6", true, false];
// 'any' type allows any data type (looser type safety)
var data5 = [1, 2, 3, "4", "5", "6", true, false];
// Assigning a specific value to 'pi' with a literal type
var pi = 3.14;
// pi = 3.42  // Error: Only 3.14 can be assigned to 'pi'
// Example of using literal types for strict assignment
var seatAllotment;
seatAllotment = "aisle"; // Valid
// seatAllotment = "crew"  // Error: 'crew' is not a valid value
