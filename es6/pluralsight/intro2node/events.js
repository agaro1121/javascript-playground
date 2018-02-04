const EventEmitter = require('events').EventEmitter;

/*
* Pattern - return an EventEmitter instance
* */
const getResource = function(n) {
    const e = new EventEmitter();

    process.nextTick(() => {
        let count = 0;
        e.emit('start');
        const t = setInterval(() => {
            e.emit('data', ++count);
            if(count === n){
                e.emit('end', count);
                clearInterval(t); //get this wrong and the shit runs forever!
            }
        }, 10); //10 = ms
    });

    return (e);
};

const r = getResource(5);

r.on('start', () => console.log("I've started!"));
r.on('data', (data) => console.log(`     I received data -> ${data}`));
r.on('end', (t) => console.log(`I'm done, with ${t} data events.`));
