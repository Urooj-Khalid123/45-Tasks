"use strict";
//Q17 - Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
Object.defineProperty(exports, "__esModule", { value: true });
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//Print a message to each of the two people still on your list, letting them know they’re still invited.
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guest_list = ["Bob", "Ben", "Pinky"];
console.log("\n INVITATION OF NEW LIST : \n");
// second set of invitation messages
for (let j = 0; j < guest_list.length; j++) {
    console.log(`Dear ${guest_list[j]} : \n You are invited to dinner! \n`);
}
console.log("Good News!!! I found a bigger dinner table. So more space is available so our new guests are : \n");
//Add More Guests..
guest_list.unshift("Eve"); //begining of the array..
guest_list.splice(2, 0, "Alvin"); // middle of the array..
guest_list.push("Max"); // end of the array..
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]}! You are invited to dinner. \n`);
}
// Qno 17 :
console.log("\n Unfortunetly! I can invite only two people for dinner. \n"); // Add a new line that print a message
