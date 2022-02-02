const express = require('express');
const app = express()

const data = require('./data')

app.get('/', (req, res) => {
    res.json(data.students);
})


app.listen(5000, () => {
    console.log("Listening at port 5000...")
})