
const error = new new Error("some error message");

/**
 * Anything returning this can be checked with `instanceof`
 */

// exception handling

try {
	// code
} catch(err) {
	console.error(`Error: ${err.message}`);
	console.error(`Error: ${err.stack}`);
}

/**
 * Throwing exceptions
 *
 * You can throw anything.
 * Convention says throw instance of `Error`
 */