//your code here
const button = document.getElementById('btn');
let guessNumber = document.getElementById('guess').value;
let response = document.getElementById('response');
let respondHotOrCold = document.getElementById('respond');
let randomNumber = Math.random()*100;
let previousGuess = parseInt(guessNumber);

button.addEventListener('click', function(){

	let difference = parseInt(guessNumber) - previousGuess;
		
	if(parseInt(guessNumber) < randomNumber)
	{
		response.innerHTML = 'guess higher';
		 
		if(difference < (parseInt(guessNumber) - randomNumber))
		{
			respondHotOrCold.innerHTML = 'Getting cooler';
		}
		elseif(difference > (parseInt(guessNumber) - randomNumber))
		{
			respondHotOrCold.innerHTML = 'Getting hotter';
		}
	}
	else if(parseInt(guessNumber) > randomNumber)
	{
		response.innerHTML = 'guess lower';
	}
	
});


