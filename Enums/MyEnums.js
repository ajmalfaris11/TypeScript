// Enums allow us to define a set of named constants.
// Example of a numeric enum where values start from 0 by default.
var SeatType;
(function (SeatType) {
    SeatType[SeatType["Window"] = 0] = "Window";
    SeatType[SeatType["Middle"] = 1] = "Middle";
    SeatType[SeatType["Aisle"] = 2] = "Aisle";
    SeatType[SeatType["ExitRow"] = 3] = "ExitRow"; // 3
})(SeatType || (SeatType = {}));
var mySeat = SeatType.Window;
console.log(mySeat); // Output: 0
// Access the enum by its name
console.log(SeatType[0]); // Output: "Window"
//   ----------------------------------------------------------------
// Custom starting values can be assigned.
var AccessLevel;
(function (AccessLevel) {
    AccessLevel[AccessLevel["Guest"] = 1] = "Guest";
    AccessLevel[AccessLevel["User"] = 5] = "User";
    AccessLevel[AccessLevel["Admin"] = 10] = "Admin"; // Next value is 10
})(AccessLevel || (AccessLevel = {}));
var userAccess = AccessLevel.Admin;
console.log(userAccess); // Output: 10
//   ----------------------------------------------------------------
// String enums allow each member to be assigned a specific string value.
var Directions;
(function (Directions) {
    Directions["North"] = "NORTH";
    Directions["South"] = "SOUTH";
    Directions["East"] = "EAST";
    Directions["West"] = "WEST";
})(Directions || (Directions = {}));
var direction = Directions.North;
console.log(direction); // Output: "NORTH"
//   ----------------------------------------------------------------
// You can mix string and numeric values in an enum (though it's less common).
var Status;
(function (Status) {
    Status[Status["Success"] = 1] = "Success";
    Status["Failure"] = "FAILURE";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
console.log(Status.Failure); // Output: "FAILURE"
console.log(Status[1]); // Output: "Success"
//   ----------------------------------------------------------------
var Responsee;
(function (Responsee) {
    Responsee["Yes"] = "YES";
    Responsee["No"] = "NO";
})(Responsee || (Responsee = {}));
function getResponse(response) {
    if (response === Responsee.Yes) {
        return "You selected YES!";
    }
    else {
        return "You selected NO!";
    }
}
console.log(getResponse(Responsee.Yes)); // Output: "You selected YES!"
console.log(getResponse(Responsee.No)); // Output: "You selected NO!"
var favoriteColor = 1 /* Colors.Green */;
console.log(favoriteColor); // Output: 1 (Inlined and optimized)
