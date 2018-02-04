const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000; //default to 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const bookRouter = express.Router();

/*
* Simple get with query string
* */
bookRouter.route('/books')
    .post((req, res) => {
        res.status(201).json(req.body);
    })
    .get((req, res) => {
        const query = req.query; //query string - { genre: 'Fiction' }
        console.log(query);
        const responseJson = {
            hello: "This my book api!"
        };
        res.json(responseJson);
    });

/*
* Simple get with url param
* */
bookRouter.route('/books/:bookId')
    .get((req, res) => {
        const bookId = req.params.bookId;
        const responseJson = {
            hello: "This my book api!",
            ask: `You asked for bookId=${bookId}`
        };
        res.json(responseJson);
    });

app.use("/api", bookRouter);

app.get("/", (req, res) => {
    res.send("Welcome to my API!");
});

app.listen(port, () => {
    console.log(`Gulp is Running on port ${port}`);
});