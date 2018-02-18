const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/****** PASSPORT ********/
const cookieParser = require('cookie-parser');
const session = require('express-session');
/****** PASSPORT ********/

const port = 9000;

const authRouter = require('./src/routes/authRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
/****** PASSPORT ********/
app.use(cookieParser());
app.use(session({secret: 'mySecret', saveUninitialized: false, resave: false}));

require('./src/config/passport')(app); //just execute?
/****** PASSPORT ********/

// set up a static directory
// localhost:${port}/css/styles.css as an example
app.use(express.static('public'));
// for index.html
// localhost:${port}/index.html as an example
// app.use(express.static('src/views'));
app.set('views', 'src/views');

app.set('view engine', 'ejs');

app.use('/auth', authRouter());

// https://stackoverflow.com/questions/7754799/error-cannot-find-module-ejs
app.get('/', (req, res) => {
    res.render('index', {title: 'Hello from render', list: ['a', 'b']});
});


app.listen(port, err => {
    console.log(`running server on port ${port}...`);
});