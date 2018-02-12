const express = require('express');

const app = express();

const port = 9000;

// set up a static directory
// localhost:${port}/css/styles.css as an example
app.use(express.static('public'));
// for index.html
// localhost:${port}/index.html as an example
app.use(express.static('src/views'));

app.get('/', (req, res) => {
    res.send("Saluton Mondo!");
});

app.listen(port, err => {
    console.log(`running server on port ${port}...`);
});