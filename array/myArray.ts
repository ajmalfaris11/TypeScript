// Defining an array of strings for superhero names
const superHeros: string[] = []
const heroPower: number[] = []

// ALTERNATIVE WAY: Using Array<T> generic syntax for defining arrays
const superHEros: Array<number> = []
const superPower: Array<string> = []

// Defining a User type with properties name and isActive
type User = {
     name: string;
     isActive: boolean;
}

// Creating an array of User objects
const allUsers: User[] = []

// Defining a 2D array of numbers for ML models
const MLModels: number[][] = [
    [255, 255, 255], // Example data representing ML model parameters
]

// Adding elements to the arrays
superHeros.push("superman") // Adding a superhero name to the array
heroPower.push(2) // Adding a power level to the heroPower array

// Adding a User object to the allUsers array
allUsers.push({
    name: "ajmal",
    isActive: true,
})
