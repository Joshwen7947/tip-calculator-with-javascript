const custom = document.getElementById('custom');
////////////////////////////////////////////////////////////////////////
// RESET BUTTON
const resetButton = document.querySelector('#reset');
function reload() {
	reload = location.reload();
}
resetButton.addEventListener('click', reload, false);
////////////////////////////////////////////////////////////////////////
//CALCULATION FUNCTION
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
	let grand = value + tipTotal;
	if (people === 1) {
		document.getElementById('currentFinalTotal').innerHTML = `$` + grand;
	} else {
		document.getElementById('currentFinalTotal').innerHTML =
			`$` + grand / people;
	}
	console.log(`The bill will be split ` + people + ` ways`);
	console.log(`The tip is $` + total + ` each`);
	console.log(`The grand total is $` + grand);
	document.getElementById('currentSubTotal').innerHTML = `$` + total; //Tip Amount per person
}
////////////////////////////////////////////////////////////////////////
// CUSTOM TIP
custom.addEventListener('click', () => {
	console.log('custom tip clicked');
});
