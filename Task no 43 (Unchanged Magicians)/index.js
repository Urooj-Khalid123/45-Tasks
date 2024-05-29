"use strict";
// Q43 - Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Criss Angel", "Dynamo", "David Blaine"];
function make_great(magicians) {
    let greatMaginicians = [];
    magicians.forEach((magician) => {
        greatMaginicians.push(`${magician} the Great`);
    });
    return greatMaginicians;
}
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
make_great(magicians);
show_magicians(magicians);
