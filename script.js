// 1. Deposit some money
// 2. Determine # of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if won
// 6. Give user winnings
// 7. Play again


//Importing the package -- just like import in python
const prompt = require("prompt-sync")();

const deposit = () => {
    depositAmount = prompt("Enter a deposit amount: ")
}

deposit();