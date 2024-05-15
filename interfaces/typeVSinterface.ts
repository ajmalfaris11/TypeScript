// In TypeScript, both type and interface are used to define the structure of objects.
// However, they have subtle differences and can be used in slightly different ways.

// interface:--

// Primarily used to define the shape of an object. It can be extended and implemented. 
// It is flexible when defining object types and can support declaration merging 
// (i.e., you can declare the same interface in multiple places, and TypeScript will merge them together).

// Can be extended using the extends keyword, allowing the inheritance of properties and methods 
// from other interfaces.

// type:--

// Can be used to define primitive types, unions, intersections, and more. It is more versatile and can 
// define types beyond just objects (e.g., type User = strin

// **---------------------------------------------------------------------------------------------------


// Defining a 'User' interface with properties and methods
interface User {
    readonly dbId: number, // Readonly property 'dbId' that cannot be modified after initialization
    email: string, // Email property of type string
    userId: number, // User ID property of type number
    googleId?: string, // Optional property 'googleId', which may or may not be present

    // Method 'startTrail' that returns a string value
    startTrail: () => string, 

    // Method 'endTrail' that returns a string value
    endTrail(): string, // This is another method with the same return type as 'startTrail' but a different syntax

    // Method 'getCoupon' that takes a string 'couponName' and returns a number (coupon value)
    getCoupon(couponName: string): number 
}

// Re-opening the 'User' interface to add new property
interface User {
    githubToken: string
}

// Creating an object 'ajmal' of type 'User'
const ajmal: User = {
    dbId: 5234223525, // dbId of the user
    email: "ajmalfaris.me@gmail.com", // User's email
    userId: 333, // User ID

    // Implementing 'startTrail' method, which returns a string
    startTrail: () => {
        return "interface trail"
    },

    // Implementing 'endTrail' method, which returns a string
    endTrail: () => {
        return "interface trail"
    },

    // Implementing 'getCoupon' method, which accepts a coupon name and returns the coupon value
    getCoupon: (name: "ajmal10") => {
        return 10 // Hardcoded coupon value of 10 for the given coupon name
    },

    // Adding the new 'githubToken' property
    githubToken: "ajmalfaris11"
}

// Extending the User interface using 'extends' to create an 'Admin' interface
interface Admin extends User { 
    role: "Admin" | "Teacher" | "Leader" // Defining the role property
}

// Creating an object 'ajmalFaris' of type 'Admin' that extends from 'User'
const ajmalFaris: Admin = {
    dbId: 5234223525, 
    email: "ajmalfaris.me@gmail.com", 
    userId: 333,

    startTrail: () => {
        return "interface trail"
    },

    endTrail: () => {
        return "interface trail"
    },

    getCoupon: (name: "ajmal10") => {
        return 10
    },

    githubToken: "ajmalfaris11", // Inheriting from 'User'

    role: "Leader" // Role specific to 'Admin'
}
