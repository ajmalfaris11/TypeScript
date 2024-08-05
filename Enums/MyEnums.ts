// Enums allow us to define a set of named constants.
// Example of a numeric enum where values start from 0 by default.

enum SeatType {
    Window,       // 0
    Middle,       // 1
    Aisle,        // 2
    ExitRow       // 3
  }
  
  let mySeat: SeatType = SeatType.Window;
  console.log(mySeat); // Output: 0
  
  // Access the enum by its name
  console.log(SeatType[0]); // Output: "Window"
  
//   ----------------------------------------------------------------

  // Custom starting values can be assigned.

enum AccessLevel {
    Guest = 1,       // Starts at 1
    User = 5,        // Next value is 5
    Admin = 10       // Next value is 10
  }
  
  let userAccess: AccessLevel = AccessLevel.Admin;
  console.log(userAccess); // Output: 10


  //   ----------------------------------------------------------------


  // String enums allow each member to be assigned a specific string value.

enum Directions {
    North = "NORTH",
    South = "SOUTH",
    East = "EAST",
    West = "WEST"
  }
  
  let direction: Directions = Directions.North;
  console.log(direction); // Output: "NORTH"
  
  
//   ----------------------------------------------------------------


// You can mix string and numeric values in an enum (though it's less common).

enum Status {
  Success = 1,
  Failure = "FAILURE",
  Pending = 2
}

console.log(Status.Failure); // Output: "FAILURE"
console.log(Status[1]);      // Output: "Success"


//   ----------------------------------------------------------------



enum Responsee {
    Yes = "YES",
    No = "NO",
  }
  
  function getResponse(response: Responsee) {
    if (response === Responsee.Yes) {
      return "You selected YES!";
    } else {
      return "You selected NO!";
    }
  }
  
  console.log(getResponse(Responsee.Yes)); // Output: "You selected YES!"
  console.log(getResponse(Responsee.No));  // Output: "You selected NO!"
  

//   ----------------------------------------------------------------



  // Const enums improve performance by inlining enum values at compile time.

const enum Colors {
    Red,
    Green,
    Blue
  }
  
  let favoriteColor: Colors = Colors.Green;
  console.log(favoriteColor); // Output: 1 (Inlined and optimized)
  