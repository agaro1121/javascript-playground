const {spawn} = require('child_process');

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin);

wc.stdout.on('data', data => {
    console.log(`Number of files:\n${data}`);
});

/*
* To run:
* node spawn-pipe.js
* (type stuff)
* Ctrl+d to see it work
* */