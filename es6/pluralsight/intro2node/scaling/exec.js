const exec = require('child_process').exec;

const child = exec('uptime', (err, stdout, stderr) => {
    if(err){
        console.log(`Error: ${stderr}`);
    } else {
        console.log(`Output is: ${stdout}`);
    }
});

// errors
const child2 = exec('uptime | 23cut -d "," -f 1', (err, stdout, stderr) => {
    if(err){
        console.log(`Error: ${stderr}`);
    } else {
        console.log(`Output is: ${stdout}`);
    }
});

console.log(`PID of child1 is ${child.pid}`);
console.log(`PID of child2 is ${child2.pid}`);