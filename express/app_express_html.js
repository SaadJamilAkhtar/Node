const express = require('express')
const app = express()
const path = require('path')

// setup static and middleware
app.use(express.static("./public"))

// add index page
app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "./index.html"))
})

// handle 4040
app.all("*", (req, res) => {
    res.status(404).send("404 Page not found!")
})

// start app
app.listen(5000, () => {
    console.log("server listening at port 5000...")
})