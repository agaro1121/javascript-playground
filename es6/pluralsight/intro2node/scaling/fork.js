const fork = require('child_process').fork;

const child = fork(__dirname + '/honourstudent.js');

child.on('message', m => {
    console.log(`The answer is: ${m.answer}`);
    child.send({ cmd: 'done'});
});

child.send({ cmd: 'double', number: 20});