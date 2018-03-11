const {exec} = require('child_process');

/*
* We can use the whole command here because
* it gets executed in a shell
* */
exec('find . -type f | wc -l', (err, stdout, stderr) => {
    if(err) {
        console.log(`exec error: ${err}`);
        return;
    }

    console.log(`Number of files ${stdout}`)
});