const http = require('http')
const server = http.createServer((req,res)=> {
    console.log("Request received.");
    res.end("<h1>Hello Worlds! </h1>")
});


server.listen(5000, () => {
    console.log("Server started at 5000...");
});