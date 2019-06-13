
// Creates an array that lists out all of the options (a-z).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var chances = 0;
var wrongGuess = [];
var guessesLeft = 9;
var yourGuessesSoFar = 0;
var answerArray = [];
var wins = 0;
let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
var losses = 0;
/*
1. THe computer guesses a letter from the array (computer choices). Make sure the user enters a letter.
2. THe user guesses a letter from the same array. 
3. That letter is lowwercased (toLowerCase()), The latter is put in an array.
4. Compare the guesses
5. If user_guess === computer_guess : ++wins
6. If they do not match: ++guesses
7. If guesses == 7, then ++losses 
8. If the user guesses more than 9 times without a win. Alert and then reset
*/

//function reset() {}
//const reset = ()=>{}

let reset = () => {
    console.log("Resetting........")
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesLeft = 9;
    wrongGuess = [];
    losses++
}


//This is a function that takes in an argument. THrough the function it is called a parameter.
document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        console.log(event)
        var userKeyPressed = event.key.toLowerCase();
        if (chances === 0) {
            console.log(computerGuess)
        }

        if (computerGuess === userKeyPressed) {
            ++wins
            reset()
            console.log(`You now have ${wins} wins`)
        } else {
            --guessesLeft
            console.log(`You now have ${guessesLeft} guesses left`);
            wrongGuess.push(userKeyPressed);
        }
        if (guessesLeft === 0) {
            console.log('You Lose')
            reset()
        }
    } else {
        alert("Not a number")
    }

    document.getElementById("wins").innerHTML = wins;

    document.getElementById("wrongGuess").innerHTML = wrongGuess;

    document.getElementById("guessesLeft").innerHTML = guessesLeft;

    document.getElementById("losses").innerHTML = losses;
}