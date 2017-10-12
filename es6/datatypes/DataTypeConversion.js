/* Converting to Numbers */
const numStr = "33.3";
const num = Number(numStr); //creates primitive

 // the " volts" is ignored, 16 is. parsed in base 10
const a = parseInt("16 volts", 10);

 // parse hexadecimal 3a; result is 58 
const b = parseInt("3a", 16);

 // the " kph" is ignored; parseFloat always assumes base 10
const c = parseFloat("15.5 kph");


const d = new Date();
// milliseconds since Epoch
const ts = d.valueOf();


const bool = true;
//1 (true) or 0 (false)
const n = bool ? 1 : 0;

/* Convert to Boolean */
Boolean(0) // false
let anyOtherNumber = 1
Boolean(anyOtherNumber) // true for any other number
