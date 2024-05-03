 const User = {
    name: "ajmal",
    email: "ajmalfaris.me@gmail.com",
    isActive: true,
 }

 function createUser ({name: string, isPaid: boolean}){}

//  createUser({name: "ajmal", isPaid: true, email: "ajmalfaris.me@gmail.com"}) ----> wont work because email didnt set

 let newUser = {name: "ajmal", isPaid: true, email: "ajmalfaris.me@gmail.com"} //----> this will work
 createUser(newUser); // its a bad behaviou of the object in Ts


 function createCourse():{name: string, price: number}{

    return {name: "reactjs", price: 399}  // ----> return datatypes mentioned in the method 
    // return name --------> so wont work these kind of things 

 }

//  ===== Type Aliases ===== Type Aliases ===== Type Aliases ===== Type Aliases ===== Type Aliases =====

// Define a type alias 'Users' with properties: name, email, and isActive
type Users = {
    name: string;          // User's name as a string
    email: string;         // User's email as a string
    isActive: boolean;   // Boolean indicating if the user is active 
}

// Function 'create_user' takes a 'Users' object as input and returns a 'Users' object
function create_user(user: Users): Users {
    // Returns a new object with default values (ignores the input 'user' object)
    return { name: "", email: "", isActive: true }; 
}

// Calling 'create_user' with an empty 'Users' object
create_user({ name: "", email: "", isActive: true });

// Result: The function returns a new object with default values 
// { name: "", email: "", isActivate: true }, ignoring the passed input object



 export{} 