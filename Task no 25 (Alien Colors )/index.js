"use strict";
// Q25 - Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
Object.defineProperty(exports, "__esModule", { value: true });
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
//Version that passes
let alien_color = "green";
if (alien_color === "green") {
    console.log("The player just earned 5 points.");
}
//The version that fails will have no output.
alien_color = "red";
if (alien_color === "green") {
    console.log("The version that fails will have no output."); // no output because the condition is false
}
