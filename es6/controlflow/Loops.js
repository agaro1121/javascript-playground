const player = { name: "Thomas", rank: "Midshipman", age: 25};

// loop through properties of object
for (let prop in player) {
	if(!player.hasOwnProperty(prop)) continue;
	console.log(`${prop} : ${player[prop]}`);
}