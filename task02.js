"use strict";

// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = "42";
// Try changing to "hello", 10, null, NaN
//   console.log(typeof userInput);
//   console.log(isNaN(userInput));
//   console.log(!isNaN(userInput));

if (typeof userInput === "number" && !isNaN(userInput)) {
  console.log("It is a number");
} else {
  console.log("Not a number");
}
