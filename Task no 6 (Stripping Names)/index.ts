// Q6 - Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let myName:string = "\t \n Urooj \t \n" // here’s save the name with whitespace.

console.log("Whitespace : ", myName); // shows the name with whitespace.
console.log("Without Whitespace :", myName.trim());  //shows the name without whitespace.