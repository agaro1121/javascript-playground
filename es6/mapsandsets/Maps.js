

const userRoles = new Map();

const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };

// set values
userRoles.set(u1, "user");

// `chain set()` commands
userRoles
	.set(u2, "user")
	.set(u3, "admin")
	.set(u4, "user");

// pass values in constructor
const userRoles2 = new Map([
		[u2, "user"],
		[u3, "admin"],
		[u4, "user"]
	]);	

userRoles.get(u1);
userRoles.size;

/**
 * Traversal
 *
 * These seem to be iterators that can only be materialized once
 */
let keys = userRoles.keys();
let values = userRoles.values();
let entries = userRoles.entries(); // returns List[[key, value]]

for(let k of keys)
	console.log(k.name);

for(let v of values)
	console.log(v);

for(let entry of entries)
	console.log(`user: ${entry[0].name} role: ${entry[1]}`);

// destructure entries
for(let [user, role] of userRoles.entries())
	console.log(`users: ${user.name} role: ${role}`);

// entries() is default iterator
for(let [user, role] of userRoles)
	console.log(`userss: ${user.name} role: ${role}`);

// to get an array instead of an iterable object, use Spead Operator
console.log([...userRoles.values()]);
console.log([...userRoles.keys()]);
console.log([...userRoles.entries()]);

// These arrays can be re-used unlike the iterable objects
let values2 = [...userRoles.values()];

for(let v of values2)
	console.log("values2 = "+v);

for(let v of values2)
	console.log("values2 = "+v);

/**
 * Deleting
 */

userRoles.delete(u2);
userRoles.clear();