/**
 * variables declared with `var` can 
 * be used before declaration
 */

x;
var x = 3;
console.log(x);

// works with functions too
f();
function f() {
	console.log('f');
}

(function(){
	'use strict';

	console.log('code goes here!');
	console.log('only this function is in strict mode');
})();