// Q35 - Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

//Create an array of animals with a common characteristic
let animals = ["Dolphin", "Elephant", "Penguin"];

//print the name of each animal
for(let i = 0; i < animals.length; i++){
    console.log(`${animals[i]}`)
};


// Print a sentence about each animal
for(let j = 0; j < animals.length;  j++){
    console.log(`A ${animals[j]} would make a great pet.`)
};


// print a sentence about their common characteristic
console.log("\nAny of these animals would make a great pet");