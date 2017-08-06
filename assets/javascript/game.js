
	var alaphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n"
	"o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"];
	var guessedLetters = [];
	var words = ["mario", "zelda", "supersmashbros", "starcraft", "streetfigher", "diablo", "overwatch", "halo"];
	var wins = 0;
	var losses = 0;
	var userGuess = event.key;
	var lives = 9;

//Reseting the Game Once Completed 
	var resetGame = function() {
		answerArray = [];
		guessedLetters = [];
		lives = 9;
		newWord = words[Math.floor(Math.random() * words.length)];
		remainingLetters = newWord.length;

}

 var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }