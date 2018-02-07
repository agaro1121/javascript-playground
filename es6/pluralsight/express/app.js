const express = require('express');
const bodyParser = require('body-parser');
const BookController = require('./controllers/BookController');
const bookController = BookController();

const app = express();

const port = process.env.PORT || 3000; //default to 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const bookRouter = express.Router();

/*
* Simple get with query string
* */
bookRouter.route('/books')
    .post(bookController.post)
    .get(bookController.get);

/*
* middleware
* */
bookRouter.use('/books/:bookId', (req, res, next) => {
    console.log("You've reached middleware 1 !!!");
    req.middleware1 = "middleware1_success";
    next(); // if you don't call this, your api will hang!!!
});

bookRouter.use('/books/:bookId', (req, res, next) => {
    console.log("You've reached middleware 2 !!!");
    req.middleware2 = "middleware2_success";
    next(); // if you don't call this, your api will hang!!!
});

/*
* Simple get with url param
*
* Put the `bookRouter` in a separate file next time
* Also, wrap the above middleware in 'celebrate'
* https://www.npmjs.com/package/celebrate
* to be passed into the route directly
* something like:
* bookRouter.get('/path/to/route',
*   callToParam(..args),
*   controller.get <- this looks like: controller.get((req, res) => {})
*   );
*
*
*
* */
bookRouter.route('/books/:bookId')
    .get((req, res) => {
        const bookId = req.params.bookId;
        const responseJson = {
            hello: "This my book api!",
            ask: `You asked for bookId=${bookId}`,
            middleware_flag1: req.middleware1,
            middleware_flag2: req.middleware2
        };
        res.json(responseJson);
    })
    .put((req, res) => {
        const bookId = req.params.bookId;
        const responseJson = {
            hello: "This my book api!",
            put: `You put bookId=${bookId}`,
            payload: req.body,
            middleware_flag1: req.middleware1,
            middleware_flag2: req.middleware2
        };
        res.json(responseJson);
    })
    .patch((req, res) => {
        const bookId = req.params.bookId;
        const responseJson = {
            hello: "This my book api!",
            patch: `You patched bookId=${bookId}`,
            payload: req.body,
            middleware_flag1: req.middleware1,
            middleware_flag2: req.middleware2
        };
        res.json(responseJson);
    }).delete((req, res) => {
        const bookId = req.params.bookId;
        console.log(`You deleted bookId=${bookId}`);
        res.status(204).send("Removed");
    });

app.use("/api", bookRouter);

app.get("/", (req, res) => {
    res.send("Welcome to my API!");
});

app.listen(port, () => {
    console.log(`Gulp is Running on port ${port}`);
});

module.exports = app;