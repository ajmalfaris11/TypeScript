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

 export{} 