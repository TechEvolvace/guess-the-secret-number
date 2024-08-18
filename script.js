/*
    Objectives:

    For the prompts: 
    1) Gather the minimum number and maximum number the user entered
    2) Check if the maximum number the player entered is GREATER than the minimum number the player entered 
        If yes, the Next button should now appear (the Next button is initially invisible to user). Probably use DOM to help with the controlled appearance of the Next button
        If no, the Next button should remain invisible and an message in red text displays on screen that the user should enter a different number. 
    3) After user clicks on Next, then the two values (minimum and maximum) are passed to another function to generate the random value. User can't terminate the game while the game is progressing. 
        This function to generate the random value should wait for the player to enter the two numbers! 

*/

// This is to help see if the program has received user input 
let minimum;
let maximum; 

document.getElementById("confirm-valid-ranges").onclick = function(){
    minimum = document.getElementById("possible-minimum").value;
        maximum = document.getElementById("possible-maximum").value;
        document.getElementById("verify-range-message").innerHTML = `You entered ` + $(minimum) + ` as the minimum number and ` + $(maximum) + ` as the maximum number`;
}