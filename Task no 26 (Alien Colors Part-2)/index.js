"use strict";
//Q26 - Alien Colors #2 Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//Write one version of this program that runs the if block and another that runs the else block.
//1st version that Passes
let alien_color = "green";
if (alien_color === "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("the player just earned 10 points.");
}
//2nd version that runs else block
alien_color = "yellow";
if (alien_color === "green") {
    console.log(" The player just earned 5 points for shooting the alien.");
}
else {
    console.log("You just earned 10 points");
}
