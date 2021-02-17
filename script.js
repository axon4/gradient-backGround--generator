// gradient-picker

var body = document.getElementById('gradient');
var CSS = document.querySelector('h3');
var colour1 = document.querySelector('.colour1');
var colour2 = document.querySelector('.colour2');

function disPlayCSSValue() {
	CSS.textContent = body.style.background + ';';
};

function setGradient() {
	body.style.background = 'linear-gradient(to right, ' + colour1.value + ', ' + colour2.value + ')';

	disPlayCSSValue();
};

colour1.addEventListener('input', setGradient);
colour2.addEventListener('input', setGradient);

// random colour-picker--button

var button = document.querySelector('button');

function getRandomInteger(minimum, maximum) {
	return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

function getRandomColour() {
	// var r = Math.floor(Math.random() * 255);
	// var g = Math.floor(Math.random() * 255);
	// var b = Math.floor(Math.random() * 255);

	// return 'rgb(' + r + ', ' + g + ', ' + b + ')';


	// could possibly be placed in loop
	var hexCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
	var r1 = hexCharacters[getRandomInteger(0, 15)];
	var r2 = hexCharacters[getRandomInteger(0, 15)];
	var g1 = hexCharacters[getRandomInteger(0, 15)];
	var g2 = hexCharacters[getRandomInteger(0, 15)];
	var b1 = hexCharacters[getRandomInteger(0, 15)];
	var b2 = hexCharacters[getRandomInteger(0, 15)];

	return '#' + r1 + r2 + g1 + g2 + b1 + b2;
};

function setRandomColour() {
	var temporaryColour1 = getRandomColour();
	var temporaryColour2 = getRandomColour();

	body.style.background = 'linear-gradient(to right, ' + temporaryColour1 + ', ' + temporaryColour2 + ')';

	disPlayCSSValue();
	// upDate inPut colours when button is pressed
	upDateInPutColours(temporaryColour1, temporaryColour2);

	return [temporaryColour1, temporaryColour2];
};

button.addEventListener('click', setRandomColour);

// set random backGround upOn page-load
var temporaryColours = setRandomColour();

// set inPut-colour to match backGround upOn page-load

function upDateInPutColours(inPut1, inPut2) {
	var inPutValues = document.querySelectorAll('input');

	inPutValues[0] = inPutValues[0].setAttribute('value', inPut1);
	inPutValues[1] = inPutValues[1].setAttribute('value', inPut2);
};

upDateInPutColours(temporaryColours[0], temporaryColours[1]);

// disPlay initial linear-gradient--property---CSS-selector upOn page-load
disPlayCSSValue();