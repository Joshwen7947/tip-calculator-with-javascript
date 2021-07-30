console.log('working');

const billAmount = document.getElementById('billAmount').value;
const buttons = document.querySelectorAll('button');
const custom = document.getElementById('custom');
const numberOfPeople = document.getElementById('numberOfPeopleInput');
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

function getValue() {
	const value = document.querySelector('#billAmount').value;
	console.log(value);
	fivePercent.addEventListener('click', () => {
		console.log('5% clicked');
		fivePercent.style.backgroundColor = 'hsl(172, 67%, 45%)';
		const tipTotal = value * 0.05;
		console.log(tipTotal);
	});
	tenPercent.addEventListener('click', () => {
		console.log('10% clicked');
		fivePercent.style.backgroundColor = 'hsl(172, 67%, 45%)';
		const tipTotal = value * 0.1;
		console.log(tipTotal);
	});
	fifteenPercent.addEventListener('click', () => {
		console.log('15% clicked');
		fivePercent.style.backgroundColor = 'hsl(172, 67%, 45%)';
		const tipTotal = value * 0.15;
		console.log(tipTotal);
	});
	twentyFivePercent.addEventListener('click', () => {
		console.log('25% clicked');
		fivePercent.style.backgroundColor = 'hsl(172, 67%, 45%)';
		const tipTotal = value * 0.25;
		console.log(tipTotal);
	});
	fiftyPercent.addEventListener('click', () => {
		console.log('50% clicked');
		fivePercent.style.backgroundColor = 'hsl(172, 67%, 45%)';
		const tipTotal = value * 0.5;
		console.log(tipTotal);
	});
}
