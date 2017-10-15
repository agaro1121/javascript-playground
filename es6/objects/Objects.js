const SYM = Symbol();

const o={a:1,b:2,c:3,[SYM]:4};

for(let prop in o) { 
	// `hasOwnProperty(..)` filters out inherited properties
	if(!o.hasOwnProperty(prop)) continue; 
	console.log(`${prop}: ${o[prop]}`);
}

/*
 * Get object properties
 * Don't need to check for `hasOwnProperty`
 */ 
Object.keys(o).forEach(x => console.log(x));