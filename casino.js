// 1. Deposit some money
// 2. Determine # of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if won
// 6. Give user winnings
// 7. Play again


//Importing the package -- just like import in python
const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

// Object
const SYMBOLS_COUNT = {
    "A" : 2,
    "B" : 4,
    "C" : 6,
    "D" : 8
};

const SYMBOL_VALUES = {
    "A" : 5,
    "B" : 4,
    "C" : 3,
    "D" : 2
}

const deposit = () => {
   while (true){
    const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invalid deposit amount, try again")
        } else {
            return numberDepositAmount;
        }
    }
        
};

const getNumberOfLines = () => {
    while (true){
        const lines = prompt("Enter a number of lines 1-3: ")
            const numberOfLines = parseFloat(lines);
    
            if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
                console.log("Invalid number of lines , try again")
            } else {
                return numberOfLines;
            }
        }
}

const getBet = (balance, lines) => {
    while (true){
        const bet = prompt("Enter the total bet per line: ")
            const numberBet = parseFloat(bet);
    
            if (isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines)){
                console.log("Invalid bet, try again")
            } else {
                return numberBet;
            }
        }
}

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){ //For loop
        for (let i = 0; i < count; i++){
            symbols.push(symbol) //Inserting an item into an array
        }
    }
    
        const reels = [[], [], []]; //3 Nested arrays
        for(let i = 0; i < COLS; i++){
            const reelSymbols = [...symbols]; //Copys the symbols availible to choose for each array
            for(let j = 0; j < ROWS; j++){
                const randomIndex =  Math.floor(Math.random() * reelSymbols.length) //Generate a number from 0 to 1 and multitpy by reelsymbls
                const selectedSymbol = reelSymbols[randomIndex]
                reels[i].push(selectedSymbol);
                reelSymbols.splice(randomIndex, 1); //Remove one element from array
            }
        } 
}


const reels = spin();

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);