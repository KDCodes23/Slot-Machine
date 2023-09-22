//Deposit some money
//collect a bet amount
//determine number of lines to bet on
//spin the slot machine
//check the user if they have won or not
//give the user their winnings 
//play again

const prompt = require("prompt-sync")();

const deposit = () => {
    while(true)                                                                  //Making into a loop for the user to add the deposit of the amount of money they want to add. 
    {
        const depositAmount = prompt("Enter a deposit amount:");                    // creating a function to receive the amount they want to add
        const numberDepositAmount = parseFloat(depositAmount);                      //Converting the string value received from the user to a integer using parseFloat
    
        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0) {                //Creating a loop where it will verify that the amount they have entered is a number or not.
            console.log("Invalid deposit amount, try again");
        }
        else{
            return numberDepositAmount;
        }
   } 
};
   const getNumberOfLines = () => {
    while(true)                                                                                 //Making a loop for the lines of the slot machine for the user, where the user has to select the 1 to 3. 
    {
        const lines = prompt("Enter the numbers of lines to bet on (1-3)");                      
        const numberOfLines = parseFloat(lines);                                               
    
        if(isNaN(numberOfLines) || numberOfLines <= 0 || numbersOfLines > 3) {                  
            console.log("Invalid number of lines, try again");
        }
        else{
            return numberOfLines;
        }
   } 
};
const depositAmount = deposit();
const numberOfLines = getNumberOfLines();