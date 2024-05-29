"use strict";
// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "uRoOj"; //store person’s name in a variable,
console.log("Lowercase : ", personName.toLocaleLowerCase()); //show the name in all lowercase.
console.log("Uppercase : ", personName.toUpperCase()); // show the name in all uppercase.
console.log("Titlecase : ", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()); //show the name in Titlecase
