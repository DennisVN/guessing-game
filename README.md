# Guessing game 🤔

Welcome to yet another creation for my course at @becodeorg !<br> This time it's a little guessing game.
Guess the random number <br> between 1 and 15, and win the last pasteis de nata. Are you ready ?<br>
PLAY FOR FREE WITHOUT DOWNLOAD HERE : https://dennisvn.github.io/guessing-game/ 

# UI Screenshot
![Screenshot](https://github.com/DennisVN/guessing-game/blob/master/images/screenshott.png)

## Learning objectives
- Select a random number
- Link JavaScript to your html

## The Mission
With a simple HTML structure, create a RNG number guessing game.

### Main Features
- HTML : very basic structure with only necessary elements.
- CSS : not applicable for first version. UI is WIP
- JS : 
    - Math.floor() rounds the generated number
    - Math.random() generates random number but below zero
    - +1 has been added as 1-15 in JS actually 0-14
    - max is maximum number, also declared to peopleInVerou = 15
    - innerHTML used as a flex for userGuessLabel. <br>good test to make sure id ${peopleInVerou} is correctly declared to 15 (as intented for the ex.).
    - run and click function to take value from userGuess as input, and check with if and elseif loops.
    - if (userGuess is equal to RNG) : 
        - dialog box alerts congratulations test and displays the guess through it's ID.
    - else if (you guessed either +1 or -1 from the RNG)
        - dialog box alerts so close message 
    - else (you lost message alert box, displays results)
        - no function needed as you obvioulsy lose if you guessed the wrong number, regardless of how wrong. 
   
### WIP
- Add shared CSS 
- Add custom CSS
- Clean up code further