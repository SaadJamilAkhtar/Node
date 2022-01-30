const http = require('http')
const server = http.createServer((req,res)=> {
    console.log("Request received.");
    res.writeHead(200, {'content-type':'text/html'});
    res.write("<h1> Hello world! </h1>")
    res.end();
});


server.listen(5000, () => {
    console.log("Server started at 5000...");
});