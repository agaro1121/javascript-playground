/**
 * Alternative syntax for methods
 */

const o = {
	name: "Wallace",
	bark: function() { return "Woof!"; }
}

const oo = {
	name: "Wallace",
	bark() { return "Woof!"; }	//bark() is the difference !!!
}

/**
 * Double naming for recursion
 * - you probably don't need this...
 */

const g = function f(stop) { //cannot access f() from the outside world !!!
	if(stop) console.log("inside f");
	f(true);
};

g(false);

/**
 * - Arrow functions can't be used as constructors
 * - 'this' keyword is bound lexically. 
 * 		Basically 'this' is the same and doesn't change ever
 */

/**
 * call method
 */
function greet() {
	return `Hello, I'm ${this.name}!`; 
}
const bruce = { name: "Bruce" };

greet(); // "Hello, I'm !" - 'this' not bound
greet.call(bruce); // "Hello, I'm Bruce!" - 'this' bound to 'bruce'

function update(birthYear, occupation) { 
	this.birthYear = birthYear; 
	this.occupation = occupation;
}

update.call(bruce, 1949, 'singer');
// bruce is now { name: "Bruce", birthYear: 1949, // occupation: "singer" }

/**
 * Apply() Function
 * same as call() except takes args as array
 */
update.apply(bruce, [1949, 'singer']);

/**
 * Bind() Function
 * permanently bind 'this' to something
 */
const updateBruce = update.bind(bruce);
updateBruce(1904, "actor");
// bruce is now { name: "Bruce", birthYear: 1904, occupation: "actor" }

const madeline = { name: "Madeline" };
updateBruce.call(madeline, 1274, "king");
// bruce is now { name: "Bruce", birthYear: 1274, occupation: "king" }; // madeline is unchanged

const updateBruce1949 = update.bind(bruce, 1949);
updateBruce1949("singer, songwriter");
// bruce is now { name: "Bruce", birthYear: 1949,
//    occupation: "singer, songwriter" }

// return function from a function
// function sum(arr, f) {
// if no function is supplied, use a "null function" that // simply returns its argument unmodified
function sum(arr, f) {
	if(typeof f != 'function') f = x => x;
	return arr.reduce((a, x) => a += f(x), 0); 
}

function newSummer(f) {
	return arr => sum(arr, f);
}