// console.log('working');
const billAmount = document.getElementById('billAmount').value;
const buttons = document.querySelectorAll('button');
const custom = document.getElementById('custom');
const resetButton = document.getElementById('reset');
const enterButton = document.getElementById('enter');
//
resetButton.addEventListener('click', () => {
	console.log('reset clicked');
});
custom.addEventListener('click', () => {
	console.log('custom tip clicked');
});
////////////////////////////////////////////////////////////////////////
let value = document.querySelector('#billAmount').value;
let tipTotal;

function getValue() {
	value = document.querySelector('#billAmount').value;
	console.log(`The bill is $` + value);
	fivePercent.addEventListener('click', () => {
		tipTotal = value * 0.05;
		// console.log('5% clicked');
		fivePercent.style.backgroundColor = 'hsl(172, 67%, 45%)';
		console.log(`The total tip is: $` + tipTotal);
		return tipTotal;
	});
	tenPercent.addEventListener('click', () => {
		// console.log('10% clicked');
		tenPercent.style.backgroundColor = 'hsl(172, 67%, 45%)';
		tipTotal = value * 0.1;
		console.log(`The total tip is: $` + tipTotal);
	});
	fifteenPercent.addEventListener('click', () => {
		// console.log('15% clicked');
		fifteenPercent.style.backgroundColor = 'hsl(172, 67%, 45%)';
		tipTotal = value * 0.15;
		console.log(`The total tip is: $` + tipTotal);
	});
	twentyFivePercent.addEventListener('click', () => {
		// console.log('25% clicked');
		twentyFivePercent.style.backgroundColor = 'hsl(172, 67%, 45%)';
		tipTotal = value * 0.25;
		console.log(`The total tip is: $` + tipTotal);
	});
	fiftyPercent.addEventListener('click', () => {
		// console.log('50% clicked');
		fiftyPercent.style.backgroundColor = 'hsl(172, 67%, 45%)';
		tipTotal = value * 0.5;
		console.log(`The total tip is: $` + tipTotal);
	});
}

function getPeople() {
	const people = document.querySelector('#numberOfPeopleInput').value;
	let total = tipTotal / people;
	console.log(`The bill will be split ` + people + ` ways`);
	console.log(`The tip is $` + total + ` each`);
	let grand = value + tipTotal;
	console.log(`The grand total is $` + grand);
	document.getElementById('currentSubTotal').innerHTML = `$` + total;
	document.getElementById('currentFinalTotal').innerHTML = `$` + grand / 2;
}
let tipAmountPerPerson = document.getElementById('currentSubTotal');
let finalTotalPerPerson = document.getElementById('currentFinalTotal');
