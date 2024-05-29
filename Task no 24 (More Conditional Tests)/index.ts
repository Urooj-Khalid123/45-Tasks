//Q24 - More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let name1:string = "Urooj";
let name2:string = "Khalid";
let num1:number = 5;
let num2:number = 10;
let arr:number[] = [1, 2, 3, 4, 5] ;

// Test for equality and inequality with string :
console.log("Test for equality and inequality with string :");
console.log(name1 === "Urooj");
console.log(name1 === name2);

//Test using the Lowercase function :
console.log("\nTest using the Lowercase function :");
console.log(name1.toLocaleLowerCase() === 'urooj');
console.log(name2.toLocaleLowerCase() !== 'khalid');

//Numerical test :
console.log("\nNumerical test :");
console.log(1 < 2);
console.log(num1 >= num2);
console.log(num1 === 5);
console.log(num2 !== 10);

//Test using "and" and "or" Operators:
console.log(`\nTest using "and" and "or" Operators: `);
console.log((num1 < 10) && (num2 > 5));
console.log((num1 < 3) || (num2 > 15) );

//Test Whether an item is in an array :
console.log("\nTest Whether an item is in an array :");
console.log(arr.includes(3));
console.log(arr.includes(6));

//Test Whether an item is not in an array :
console.log("\nTest Whether an item is not in an array :");
console.log(!arr.includes(6));
console.log(!arr.includes(3));









