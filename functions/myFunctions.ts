function addTwo (num:number) {

    // num.toUpperCase() ----> this one also wont work because we mentioned the num will be number data type
    return num + 2;
}

// addTwo("2424"); in this case will show the error if we didnt specify the varible type we can give any type as argument 

addTwo(5); // this will work and other data type will be ignore


function toUpper (val:string) {
    return val.toUpperCase()
}

// toUpper(333) ---------> this argument type will show the error due to mentioned val as string
toUpper("ajmal");



function signUpUser(name: string, email: string, isPaid: boolean){}

signUpUser("ajmal", "ajmalfaris.me@gmail.com",true); // this will work
// signUpUser() -----------> won't work because the TS will show the function expecting argument
// signUpUser(1,true,"afsaf") ----------> won't work because expecting datas type already specified


let loginUser = (name:string, email:string, isPaid: boolean = false) => {} 
// isPaid: boolean have a default value ---> this is how we set default value 
//  in this case its not mantatory to give me value

loginUser(
    "ajmal faris", 
    "ajmalfaris.me@gmail.com" 
) // the function only accept the string type


function numSquer(num:number): number {  // mention the function only return the number data type
    return num * 2;
    // return "hello world" --------> this code will show the error  
    // due to mention this function only return the number data type " (): number "
}


 const heros = ["thor", "spiderman", "ironman"];
//  const heros = [1,2,3]; ----->  this one wont work because the map function expecting string data type

 heros.map((hero: string): string => {
    return `hello ${hero}`
    // return 3 -------> wont work because return value expecting the string value "():string"
 })

export {}