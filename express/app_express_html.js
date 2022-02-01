const express = require('express')
const app = express()
const path = require('path')

app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname,"./index.html"))
})

app.all("*", (req,res) => {
    res.status(404).send("404 Page not found!")
})

app.listen(5000, () => {
    console.log("server listening at port 5000...")
})