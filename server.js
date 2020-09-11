// Server using Express JS
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.get('/', (req, res) => {
//     // req.query // Query Strings
//     // req.body // Body 
//     // req.headers // Headers
//     // console.log(req.params) // URL Parameters ('/:id')
//     res.status(200).send('getting root');
// });

app.use(express.static(__dirname + '/public'));

app.listen(4000);