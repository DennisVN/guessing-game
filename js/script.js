(function () {
    function getRandomInt(max){
        return Math.floor( Math.random() * max) + 1;
    }

    const peopleInVerou = 15;
    const secretNumber = getRandomInt(peopleInVerou);
    //console.log(secretNumber); TEST

    document.getElementById("userGuessLabel").innerHTML = `Between 1 and ${peopleInVerou}`;

    document.getElementById("run").addEventListener('click', 
    function(){
        const userGuess = document.getElementById("userGuess").value;

        if (userGuess == secretNumber) {
            window.alert(`Awesome ! You number ${userGuess} was correct. You can be named many things, hungry not being one of them.`);
        }
        else if (secretNumber == userGuess+1 || secretNumber == userGuess-1) {
            window.alert(`So close, but you just missed it! Are you in a class that started on the thirteenth or what?`);
        }
        else {
            window.alert(`Bummer... You guessed ${userGuess} and the secret number was ${secretNumber}.`);
        }
   
    });

})();
