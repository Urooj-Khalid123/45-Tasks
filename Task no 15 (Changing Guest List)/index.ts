//Q15 - Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite:

//Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//Print a second set of invitation messages, one for each person who is still in your list.

//Qno 14:
let guest_list:string[] = ["Bob", "John", "Pinky"];

for(let i = 0; i < guest_list.length; i++){
    console.log(`Dear ${guest_list[i]}  : \n you are invited to dinner! \n `);
    
}
//Qno 15:
console.log(`"Unfortunately ${guest_list[1]}, can't come to dinner."`);

 guest_list[1] = "Ben";  // replacing the name of the guest

 console.log("\n INVITATION OF NEW LIST : \n");

// second set of invitation messages
 for(let j = 0; j < guest_list.length; j++){
    console.log(`Dear ${guest_list[j]} : \n You are invited to dinner! \n`);
    
 }
 


 
 