const {spawn} = require('child_process');

const child = spawn('wc');

process.stdin.pipe(child.stdin);

child.stdout.on('data', data => {
    console.log(`child stdout:\n${data}`);
});

/*
* To run:
* node spawn-pipe.js
* (type stuff)
* Ctrl+d to see it work
* */