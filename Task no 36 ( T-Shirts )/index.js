"use strict";
//Q36 - T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, message) {
    console.log(` You've ordered a  ${size}-sized shirt with the messege "${message} printed on it`);
}
;
make_shirt("medium", "I Love Typescipt");