const http = require('http');

const server = http.createServer((request, response) => {
    // TEXT/HTML
    // response.setHeader('Content-Type', 'text/html');
    // response.end('<h1>Hello</h1>');
    // console.log('I hear you!. Thanks for the request');

    // JSON
    const user = {
        name: 'John',
        hobby: 'Skating'
    };
    response.setHeader('Content-Type', 'application/json');
    // convert to string to send it over to wires
    // refer to json video for more JSON tutorial
    response.end(JSON.stringify(user));


    // response properties
    // console.log("Headers", request.headers);
    // console.log("Method", request.method);
    // console.log("URL", request.url);
});

server.listen(4000);