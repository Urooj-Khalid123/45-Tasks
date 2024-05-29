"use strict";
// Q23 - Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
Object.defineProperty(exports, "__esModule", { value: true });
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
//Look closely at your results, and make sure you understand why each line evaluates to True or False.
//Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
//Ans no 23 :-
console.log("\n ---> 5 tests evaluate to True :");
let car = "subaru";
//Test 1: Is Car equal to `sabaru` ? 
console.log("Is car == `sabaru` ? I predict True.");
console.log(car == "subaru"); //True
//Test 2: Is Car is not equal to `Honda` ?
console.log("Is car != `honda` ? I predict true.");
console.log(car != `Honda`); // True
//Test 3: Is Car Length less than And equal to 7 ?
console.log("Is car.lenth <= 7 ? I predict True.");
console.log(car.length <= 7); // True
//Test 4: Is Car lowercase ?
console.log("Is car lowercase ? I predict true.");
console.log(car === car.toLocaleLowerCase()); //True
//Test 5: Is Car not null ?
console.log("Is car not null ? I predict true.");
console.log(car !== null); // True
console.log("\n ---> 5 tests evaluate to False :");
// Test 6: Is Car equal to `Toyota` ?
console.log("Is car == `toyota` ? I predict false.");
console.log(car == "Toyota"); // False
//Test 7: Is Car length greater than And equal to 10 ?
console.log("Is car.length >= 10 ? I predict false.");
console.log(car.length >= 10); // False
//Test 8: Is Car is not equal to `sabaru` ?
console.log("Is car != `sabaru` ? I predict false.");
console.log(car != "subaru"); //False 
//Test 9: Is Car uppercase ?
console.log("Is car uppercase ? I predict false.");
console.log(car === car.toLocaleUpperCase()); //False
//Test 10: Is car an empty string ?
console.log("Is car an empty string ? I predict false.");
console.log(car === ""); //False 
