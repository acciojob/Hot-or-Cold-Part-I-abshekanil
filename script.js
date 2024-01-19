//your code here
const button = document.getElementById('btn');
let guessInput = document.getElementById('guess');
let response = document.getElementById('response');
let respondHotOrCold = document.getElementById('respond');
let randomNumber = Math.floor(Math.random() * 100) + 1;
let previousGuess = parseInt(guessInput.value);

button.addEventListener('click', function(){
	let guessNumber = parseInt(guessInput.value);
	let difference = Math.abs(guessNumber - previousGuess);
		
	if(guessNumber < randomNumber)
	{
		response.innerHTML = 'guess higher';
		 
		if(difference < Math.abs(previousGuess - randomNumber))
		{
			respondHotOrCold.innerHTML = 'Getting hotter';
		}
		else if(difference > Math.abs(previousGuess - randomNumber))
		{
			respondHotOrCold.innerHTML = 'Getting colder';
		}
	}
	else if(guessNumber > randomNumber)
	{
		response.innerHTML = 'guess lower';
	}
	else
	{
		response.innerHTML = 'Congratulations! you guessed it!';
		respondHotOrCold.innerHTML = '';
	}

	previousGuess = guessNumber;
});


