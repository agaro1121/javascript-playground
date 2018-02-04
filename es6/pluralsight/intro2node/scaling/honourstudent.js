
const evenDoubler = n => {
  if(n % 2 === 0){
      return n * 2;
  } else throw new Error("Not an even number!!!");
};

process.on('message', m => {
    if (m.cmd === 'double') {
        console.log(`hs: I was asked to double ${m.number}`);
        const result = evenDoubler(m.number);
        process.send({ answer: result});
    } else if(m.cmd === 'done'){
        process.exit();
    }
});