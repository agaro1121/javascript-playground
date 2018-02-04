const http = require('http');
const fs = require('fs');
const socketio = require('socket.io');

const handler = (req, res) => {
    fs.readFile(__dirname + "/index.html", (err, data) => {
        if(err){
            res.writeHead(500);
            return res.end("Error loading index.html");
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
};

const app = http.createServer(handler);
const io = socketio.listen(app);


io.on("connection", socket => {
    setInterval(() => {
       const ts = Date.now();
        console.log(`Emitted: ${ts}`);
        socket.emit("timer", ts);
    }, 2000);

    socket.on("submit", data => {
        console.log(`Submitted: ${data}`);
    });
});

app.listen(8080);

console.log("Server running!");