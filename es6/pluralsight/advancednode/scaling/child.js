process.on('message', msg => {
    console.log('Message from parent: ', msg);
});

let counter = 0;

setInterval(_ => {
    process.send({counter: counter++});
}, 1000);