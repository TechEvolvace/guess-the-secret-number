# Key Features of my Guess the Secret Number! game 

## Game Rules 
* The player has to guess the secret number within a specified number of attempts to win! Best attempt is when the player uses the <span style="color:red">least</span> number of guesses to guess the correct number! 
* The player must do the following before beginning each game:
    1. Choose a game mode to play the Guess the Number Game from the 6 available modes! <span style="color:purple">This decides how many guesses the player has available to guess the correct number!</span>
    2. Specify the minimum number and the maximum number the correct number can be! <span style="color:purple">This sets the range for the number to be randomly generated from!</span>

## Game Modes
* What game mode to play the Guess the Number Game!
  * Beginner (7 maximum attempts)
  * Intermediate (5 maximum attempts)
  * Advanced (3 maximum attempts)
  * Ultimate Challenge (1 maximum attempt)
  * Flexible (Player decides how many maximum attempts to get!)
  * Unrestricted (Infinite maximum attempts)

## What range should the secret number should be in?
* The range is specified by the minimum number and the maximum number, both specfied by the player
* The maximum number should be greater than the minimum number!
* Will check that the minimum number and maximum number are valid numbers.

## How the Game will play out?
* A selected number will be randomly chosen as the secret number within the ranges, inclusively, that was specfied by the player
* The player is prompted to enter a valid number as a guess
* Will penalize the player for incorrect guesses
* Will not penalize the player for making non-number guesses and prompt the user again for a number until the player has enter a number


## What happens if the Player's Guess is the Correct Number?
* Game round ends
* Results are displayed
   * Number of guesses used
   * Player wins! statement
   * Prompts the player if the player wants to play another round?


## What happens if the Player's Guess is the Incorrect Number?
* 1 attempt is subtracted from the remaining player's number of attempts
* Will display a statement of either "Higher" or "Lower"
    * Displays "Lower" if the correct number is less than the player's most recent guess
    * Displays "Higher" if the correct number is greater than the player's most recent guess
* Check if the player has any more remaining attempts
    * If player has 0 attempts, the game ends and a "You Lose!" statement is displayed
    * If player has more attempts remaining, the player is asked for another guess


## Additional Features
* Intuitive Navigation for the Guess the Number Game
* Page to display the player's best attempts (when the player uses the least number of attempts to guess the correct number)
* Great styling and web design for the Guess the Number Game

## Potential Additional Features to Implement
* Competition mode (Player plays against three other computer players in a race to guess the secret number first!) 
* Maybe have setting be in an interrogation room with four "detectives" extracting the correct secret number from a hacker suspect and whoever guessed the secret number first solves the case! 
* Maybe give player the option to choose how many bots to compete against? 
