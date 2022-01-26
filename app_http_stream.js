var http = require('http');
var fs = require('fs');

const server = http.createServer((req, res) => {
    const fileStreeam = fs.createReadStream('./big_file.txt')
    fileStreeam.on("open", () => {
        fileStreeam.pipe(res);
    });
    fileStreeam.on("error", (err) => {
        res.end(err);
    });
});

server.listen(5000, () => {
    console.log("server running at port 5000 ...")
});