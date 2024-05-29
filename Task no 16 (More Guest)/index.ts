// Q16 - More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner:

//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//Add one new guest to the beginning of your array.

//Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.

//Print a new set of invitation messages, one for each person in your list.

let guest_list:string[] = ["Bob", "Ben", "Pinky"];
 
 console.log("\n INVITATION OF NEW LIST : \n");

// second set of invitation messages
 for(let j = 0; j < guest_list.length; j++){
    console.log(`Dear ${guest_list[j]} : \n You are invited to dinner! \n`);
    
 }

 console.log("Good News!!! I found a bigger dinner table. So more space is available so our new guests are : \n");
//Add More Guests..
guest_list.unshift("Eve") //begining of the array..
guest_list.splice(2, 0, "Alvin") // middle of the array..
guest_list.push("Max") // end of the array..

 
for(let i = 0 ; i < guest_list.length; i++){
    console.log(`Dear ${guest_list[i]}! You are invited to dinner. \n`);
    
}

 
 
