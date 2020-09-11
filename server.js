// Server using Express JS
const express = require('express');

const app = express();

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

app.get('/profile', (req, res) => {
    res.send('getting profile');
});

app.listen(4000);