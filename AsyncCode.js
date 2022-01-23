const http = require('http')

const server = http.createServer((req, res) => {

    setTimeout(() => {
        // Blocking code
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(` ${i} ${j}`)
            }
        }
    }, 0);


    res.end("<h1> Hello World! </h1>")
})

server.listen(5000, () => {
    console.log("Server listening on port 5000 ...")
})