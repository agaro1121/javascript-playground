const {spawn} = require('child_process');

// const child = spawn('pwd');
const child = spawn('find', ['.', '-type', 'f']);

child.stdout.on('data', data => {
    console.log(`child stdout: \n${data}`);
});

child.stderr.on('data', data => {
    console.log(`child stderr:\n${data}`);
});

child.on('exit', (code, signal) => {
    console.log(`child process exited with code ${code}, signal ${signal}`);
});

// other events on child: disconnect, error, message, close
// stdio objects: child.stdin(writeableStream), child.stdout(readableStream), child.stderr(readableStream) ('close' event triggered when these close)