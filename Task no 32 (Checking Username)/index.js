"use strict";
//Q32 - Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
Object.defineProperty(exports, "__esModule", { value: true });
// Make a list of five or more usernames called current_users.
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// Create an array of current usernames
let current_users = ["admin", "bob", "john", "elic", "megan"];
// Create an array of new usernames
let new_users = ["admin", "megan", "devid", "alice", "bob"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLocaleLowerCase() === newUser.toUpperCase())) {
        console.log(`${newUser}will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
