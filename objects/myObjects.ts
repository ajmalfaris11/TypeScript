const User = {
    name: "ajmal",
    email: "ajmalfaris.me@gmail.com",
    isActive: true,
}

function createUser({ name: string, isPaid: boolean }) { }

//  createUser({name: "ajmal", isPaid: true, email: "ajmalfaris.me@gmail.com"}) ----> wont work because email didnt set

let newUser = { name: "ajmal", isPaid: true, email: "ajmalfaris.me@gmail.com" } //----> this will work
createUser(newUser); // its a bad behaviou of the object in Ts


function createCourse(): { name: string, price: number } {

    return { name: "reactjs", price: 399 }  // ----> return datatypes mentioned in the method 
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




// ------------------------------------------------------------------------------------------------

type User2 = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creadcardDetails?: "number"  //---------> this is not mandatory because (?) so it will be optional
}


function createUser2(U: User2) { }

let myUser: User2 = {
    _id: "12343",
    name: "ajmal",
    email: "ajmalfaris.me@gmail.com",
    isActive: false,
}


// myUser._id = "ajdmasf"  ----> wont work this because in id mentioned read only
myUser.name = "ajmal faris"



//  MIX & MATCH THE TYPE
// -----------------------

type cardNumber = {
    cardNumber :string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails  = cardNumber & cardDate & { // definding new type based on the combination of previous 2 types 
    cvv : "string" 
}


export { } 