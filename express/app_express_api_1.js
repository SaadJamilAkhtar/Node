const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.status(200).json([{name: "John"}, {name:'Doe'}]);
});

app.listen(5000, () => {
    console.log("Server listening at port 5000...");
});