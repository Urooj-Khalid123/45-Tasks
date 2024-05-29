"use strict";
// Q41 - Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Criss Angel", "Dynamo", "David Blaine"];
function show_magician(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
show_magician(magicians);
