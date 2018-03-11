const cluster = require('cluster');
const os = require('os');

/*
* User npm: pm2 for stuff like this
* */

/*
* If you curl the server: localhost:9000
* you will see different PIDs responding
* */
if (cluster.isMaster) {
    const cpus = os.cpus().length;

    console.log(`Forking for ${cpus} CPUs`);
    for(let i=0; i<cpus; i++) {
        cluster.fork(); //1 fork for every cpu
    }

    // cluster.workers //access to workers
    /*
    * send message to all workers with:
    * worker.send({field: value})
    * */

} else { //there is a flag for this as well: `.isWorker`
    require('./server');
}