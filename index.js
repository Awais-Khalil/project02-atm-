#! /usr/bin/env node
import * as readline from "readline";
// Function to generate random user data
function generateUserData() {
    const id = Math.floor(Math.random() * 100000);
    const pin = Math.floor(Math.random() * 10000);
    const balance = Math.floor(Math.random() * 10000);
    return { id, pin, balance };
}
// Generate random user data
const userData = generateUserData();
// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Prompt user for user id and user pin
rl.question("Please enter your user ID: ", (idInput) => {
    rl.question("Please enter your user PIN: ", (pinInput) => {
        const id = parseInt(idInput);
        const pin = parseInt(pinInput);
        // Check if user id and pin are correct
        if (userData.id === id && userData.pin === pin) {
            console.log("Welcome to the ATM system!");
            console.log(`Your current balance is ${userData.balance}.`);
            // ATM functionalities are unlocked here
        }
        else {
            console.log("Invalid user ID or PIN. Please try again.");
        }
        rl.close();
    });
});
