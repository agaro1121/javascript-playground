'use strict';

const server = require('net').createServer();
let counter = 0;
let sockets = {};

server.on('connection', socket => {
    socket.id = counter++;
    sockets[socket.id] = socket;

    console.log('Client connected');
    socket.write(`Welcome new client! ${socket.id}\n`);

    socket.on('data', data => {
        Object.entries(sockets).forEach(([, cs]) => {
            cs.write(`${socket.id}: `);
            cs.write(data);
        });
    });

    socket.on('end', () => {
        delete sockets[socket.id];
        console.log(`Client ${socket.id} disconnected`);
    });
});

server.listen(9000, () => console.log('Server bound to port 9000!!!'));