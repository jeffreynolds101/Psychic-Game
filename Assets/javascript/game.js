
// Creates an array that lists out all of the options (a-z).

var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var game = 0;
    var wins = 0;
    var losses = 0;
    var guessesLeft = 0;
    var yourGuessesSoFar = 0;
    var answerArray = [];

    // This function is run whenever the user presses a key. Onkeyup event is created when user releases the key.

    document.onkeyup = function(event) {
        alert("working!");
    }
      
        // Determines which key was pressed.Then we want the function to be performed.   
        document.onkeyup = function() {
            // keycode is attached to the key that has just been released. 
            // then take that character and convert it into a String. 
            // toLowerCase converts string to a lowercase format. 
            // var userguess gets reassigned every time the user presses a key. 
        var userguess = String.fromCharCode(event.keyCode).toLowerCase();
        // making sure the computer is logging the user's guesses. 
        console.log(userguess);
        
  
        // Randomly chooses a choice from the options array. Computer's guess.
        // Math.random produces a random number between 0 - 1, multiplied by the length of the array.  
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
        // logs computers guess
        console.log(computerGuess);
        }
      
// now using conditional If/Then statements to compare guesses for wins or losses. 
if (userguess === "computerGuess"){
    alert("You Win!");
} else {
    alert("You Are Not Psychic")
}