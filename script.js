//your code here
const button = document.getElementById('btn');
let guessInput = document.getElementById('guess');
let response = document.getElementById('response');
let respondHotOrCold = document.getElementById('respond');
let randomNumber = Math.floor(Math.random() * 100) + 1;
let previousGuess = null;

button.addEventListener('click', function(){
	let guessNumber = parseInt(guessInput.value);

	if(!isNaN(guessNumber) && guessNumber >= 1 && guessNumber <=100)
	{
		let difference = Math.abs(guessNumber - randomNumber);

		if(previousGuess !== null)
		{
			let previousDifference = Math.abs(previousGuess - randomNumber);
			if(difference < previousDifference)
			{
				respondHotOrCold.innerHTML = 'Getting hotter';
				response.innerHTML = 'guess higher';
				
			} else if(difference > previousDifference){
				respondHotOrCold.innerHTML = 'Getting colder';
				response.innerHTML = 'guess lower';
			} else {
				respondHotOrCold.innerHTML = 'Same temperature as previous guess';
			}
		}

		if(guessNumber === randomNumber)
		{
			response.innerHTML = 'Congratulations! you guessed it!';
			respondHotOrCold.innerHTML = '';
		}
		previousGuess = guessNumber;
		
	} else{
		response.innerHTML = 'Invalid guess. Please enter a number between 1 and 100.';
		respondHotOrCold.innerHTML = '';
	}
		
	
});


