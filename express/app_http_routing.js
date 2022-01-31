const http = require('http')
const server = http.createServer((req, res) => {
    console.log("Request received.");
    // about page
    if (req.url == "/about") {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write("<h1> About Page </h1>")
    }else
        // home page
    if (req.url == "/home") {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write("<h1> Home Page </h1>")
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        //404 page
        res.write("<h1> 404 page not found </h1>")
    }
    res.end();
});


server.listen(5000, () => {
    console.log("Server started at 5000...");
});