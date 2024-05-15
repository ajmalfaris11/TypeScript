// Interface in TypeScript defines the structure of an object, including the properties and methods it should have.

// Defining a 'User' interface with properties and methods
type User = {
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
    }
}
