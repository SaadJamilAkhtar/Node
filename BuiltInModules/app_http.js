const http = require('http');

const server = http.createServer((req, res) => {
    res.write("<h1> Hello World From Node! <\h1>")
    res.end();
});

server.listen(5000);