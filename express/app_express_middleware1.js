const express = require('express')
const app = express()

// middleware
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}


app.get('/', logger, (req, res) => {
    res.send("<h1>home</h1>")
})

app.get('/about', logger, (req, res) => {
    res.send("<h1>About</h1>")
})

app.listen(5000, () => {
    console.log("Server listening at port 5000...")
})