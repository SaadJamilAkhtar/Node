var http = require('http');
var fs = require('fs');

const server = http.createServer((req, res) => {
   const data = fs.readFileSync('./big_file.txt')
   res.end(data)
});

server.listen(5000, () => {
    console.log("server running at port 5000 ...")
});