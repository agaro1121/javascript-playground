const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
    for (let i = 0; i <1e7; i++); //simulate work
    res.end(`Handled by process ${pid}`);
}).listen(9000, _ => {
    console.log(`Started process ${pid}`);
});