/**
 * Generators essentially allow computation to be deferred,
 * and performed only as necessary.
 */

function* rainbow() { //asterisk marks the generator
	yield 'red';
	yield 'orange';
	yield 'yellow';
	yield 'green';
	yield 'blue';
	yield 'indigo';
	yield 'violet'; //this doesn't end the generator. Need a return value
	return 'beefaroni'; // if you use a `for...of` loop, this won't get printed. This puts true for done here.
	// might as well not return a value
}

const it = rainbow();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for(let color of rainbow()) {
	console.log(color);
}

// Giving control back to the caller
function* interrogate() {
	const name = yield "What is your name?";
	const color = yield "What is your favorite color?";
	return `${name}'s favorite color is ${color}.`;
}

const it2 = interrogate();
console.log(it2.next());
console.log(it2.next('Ethan'));
console.log(it2.next('orange'));