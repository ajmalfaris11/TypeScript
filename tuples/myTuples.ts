// in this we can add string and number data type without structure
const User: (string | number) [] = [22, "ajmal"] 

// in Tuples we cannot add data without structure
let tUser: [string, number, boolean]
tUser = ["ajmal", 22, true] // -----> will work
// tUser = ["22", true, "ajmal"]  -----> wont work because its not tUser data structure



let rgb: [number, number, number] = [255, 255, 255]; // this will work
// let rgb: [number, number, number] = [255, 255, 255, 0.5]; wont be  work because rgb array is limitted

// rgb = ["black", 255, "red"]  ---->  wont be work




// TYPE --- TYPE --- TYPE --- TYPE -------> in Tuples

type users = [number, string];

const newUser:users = [20, "ajmal"];

newUser [0] = 22
// newUser [0] = "ajmal"  ---> not possible because the type is number

newUser [1] = "ajmal faris"
// newUser [0] = 22  ---> not possible because the type is string




// -----------------
newUser.push(33)  //
// -----------------

// defined users as [number, string], TypeScript allows .push() operations,
//  treating the tuple as an array. However, this might not match the intended 
// strict tuple behavior. To avoid this, consider using a stricter type or limiting array mutations.