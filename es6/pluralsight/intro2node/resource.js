const EventEmitter = require('events').EventEmitter;

/*
* Pattern - extend EventEmitter itself
* */
class Resource extends EventEmitter {
    constructor(n){
        super(n);

        const maxEvents = n;
        // const self = this; //don't need it cuz i'm using fat arrow syntax

        process.nextTick(() =>  {
            let count = 0;
            this.emit('start');
            const t = setInterval(() => {
                this.emit('data', ++count);
                if(count === maxEvents){
                    this.emit('end', count);
                    clearInterval(t); //get this wrong and the shit runs forever!
                }
            }, 10); //10 = ms
        });
    }
}

module.exports = Resource;