// Union type allowing variable 'score' to be either a number or a string
let score: number | string = 33
score = 44
score = "55"  // 'score' can be a string as well

// Defining a 'User' type with name, id, and phone properties
type User =  {
    name: string
    id: number
    phone: number
}

// Defining an 'Admin' type with username and id properties
type Admin =  {
    username: string
    id: number
}

// Variable 'Ajmal' can be of type 'User' or 'Admin'
let Ajmal: User | Admin = {
    username: "ajmal",
    id: 32
}

// Reassigning 'Ajmal' to an object of type 'User'
Ajmal = {
    name: "ajmal",
    phone: 11,
    id: 32
}

// Function 'getDbId' accepting either a number or string for 'id' and performing type-specific actions
function getDbId(id: number | string) {
    // Type guarding to use string-specific method 'toLowerCase' or perform number-specific operation
    if (typeof id === "string") {
        id.toLowerCase()  // String-specific operation
    } else {
        id * 2  // Number-specific operation
    }
    console.log(`DB id is: ${id}`);
}

getDbId(11)  // Calling function with a number
getDbId("11")  // Calling function with a string

// Example of arrays in TypeScript with type annotations

// Array containing only numbers
const data1: number[] = [1, 2, 3]

// Array containing only strings
const data2: string[] = ["1", "2", "3"]

// Array that can contain either numbers or strings (not mixed)
const data3: number[] | string[] = [1, 2, 3]

// Array that can contain numbers, strings, or booleans (mixed types)
const data4: (number | string | boolean)[] = [1, 2, 3, "4", "5", "6", true, false]

// 'any' type allows any data type (looser type safety)
const data5: any[] = [1, 2, 3, "4", "5", "6", true, false]

// Assigning a specific value to 'pi' with a literal type
let pi: 3.14 = 3.14
// pi = 3.42  // Error: Only 3.14 can be assigned to 'pi'

// Example of using literal types for strict assignment
let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"  // Valid
// seatAllotment = "crew"  // Error: 'crew' is not a valid value
