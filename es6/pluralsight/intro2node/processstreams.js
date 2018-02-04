process.stdin.resume(); //this starts paused. Need this
process.stdin.setEncoding('utf8');

process.stdin.on('data', chunk => process.stdout.write(`Data -> ${chunk}`));
process.stdin.on('end', () => process.stderr.write("End!\n")); // Ctrl+d to see this event

process.on('SIGTERM', () => process.stderr.write("Why are you trying to terminate me?!? :-)"));

console.log(`Node is running as process # ${process.pid}`);