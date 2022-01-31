const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.status(200).send("<h1>Hello from express</h1>")
});

app.get('/about', (req,res)=>{
    res.status(200).send("<h1>About Page</h1>")
});

app.all("*", (req,res) => {
    res.status(404).send("<h1> 404 not found </h1>")
});

app.listen(5000, () => {
    console.log("Server listning at 5000....")
})