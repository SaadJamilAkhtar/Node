const express = require('express')
const app = express()
const logger = require('./middleware')
const auth = require('./authorise_middleware')
const morgan = require('morgan')

// app.use("/api", logger, auth)
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.status(200).send("<h1>home</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>About</h1>")
})

app.get('/api/about', (req, res) => {
    res.send("<h1>API About</h1>")
})

app.get('/api/home', (req, res) => {
    res.send("<h1>API Home</h1>")
})

app.listen(5000, () => {
    console.log("Server listening at port 5000...")
})