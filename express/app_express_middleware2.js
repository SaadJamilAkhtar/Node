const express = require('express')
const app = express()
const logger = require('./middleware')

app.use(logger)

app.get('/', (req, res) => {
    res.send("<h1>home</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>About</h1>")
})

app.listen(5000, () => {
    console.log("Server listening at port 5000...")
})