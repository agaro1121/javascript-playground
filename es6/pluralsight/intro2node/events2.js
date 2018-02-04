const Resource = require('./resource');

/*
* Pattern - return an EventEmitter instance
* */

const r = new Resource(6);

r.on('start', () => console.log("I've started!"));
r.on('data', (data) => console.log(`     I received data -> ${data}`));
r.on('end', (t) => console.log(`I'm done, with ${t} data events.`));
