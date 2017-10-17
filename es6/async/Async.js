/**
 * Callback
 */
console.log('Before timeout: ' + new Date());
function f() {
	console.log('After timeout' + new Date());
}
setTimeout(f, 3 * 1000);
console.log('I happen after setTimeout!');
console.log('Me too!');

/**
 * Convention:
 * 	Error-first
 */

const fs = require('fs'); //file system

const fileName = "mayOrMayNotExist";

fs.readFile(fileName, function(err, data){
	// always be sure to return or shit gets weird !!!!
	if(err) return console.error(`error reading file ${fileName}: ${err.message}`);
	console.log(`${fileName} contents: ${data}`);
});

/**
 * Does not work !!!
 * try..catch only work within the same function
 * the thrown error is in anonymous function !!!
 */
function readSketchyFile() {
	try {
		fs.readFile('does_not_exist.txt', function(err, data) {
			if(err) throw err; 
		});
	} catch(err) {
		console.log('warning: minor issue occurred, program continuing');
	} 
}
//readSketchyFile();