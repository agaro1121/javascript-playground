const fs = require('fs');
const http = require('http');

http.createServer( (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    if (req.url === "/file.txt") {
        // __dirname = current dir script is running in
        fs.createReadStream(__dirname + "/file.txt").pipe(res);
    } else {
        res.end("Hello World!");
    }
// }).listen(process.env.PORT, process.env.IP);
}).listen(9000);

console.log(`Server running! port=${process.env.port}`);