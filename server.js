// Server using Express JS
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    console.log('Hello');
    // run next() method to run the next request 
    next();
});

// Body-Parser for x-wwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));

// Body-Parser for raw (JSON)
app.use(bodyParser.json());

// get, post, put, delete

app.get('/', (req, res) => {
    // Automatic Header Content-Type detection
    // res.send("hello");
    // res.send("<h1>hello</h1>");
    res.send({
        name: 'John',
        hobby: 'Painting'
    });
});

app.post('/profile', (req, res) => {
    console.log(req.body); // returns undefined (needs body parser)
    res.send('Success');
});

app.get('/profile', (req, res) => {
    res.send('getting profile');
});

app.listen(4000);