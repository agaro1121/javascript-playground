/**
 * This brings us to one of the main frustrations of the JavaScript Date object: 
 * 	there’s no way to specify what time zone it should be in
 * 	
 * 	It will always store objects internally as UTC, 
 * 	and format them according to local time (which is defined by your operating system).
 *
 * Use Moment.js for cool Date stuff
 *
 */

// transmit as String
let before = { d: new Date() };
let json = JSON.stringify(before);
let after = JSON.parse(json);
after.d = new Date(after.d);


// transmit as Number
before = { d: new Date().valueOf() };
json = JSON.stringify(before);
after = JSON.parse(json);

/**
 * Comparison
 *
 * Use built in stuff
 * d1 > d2
 */

/**
 * Date arithmetic
 *
 * use the built in stuff
 *
 * d1 - d2
 */

/**
 * Sorting
 *
 * use built in stuff
 *
 * desc
 * datesArray.sort((a,b) => b - a)
 *
 * asc
 * datesArray.sort((a,b) => a - b)
 */