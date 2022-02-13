const express = require('express');
const app = express();
const data = require('../data_');
const path = require('path');
const _ = require('lodash');

// parse form data
app.use(express.urlencoded({extended: false}))
// parse json
app.use(express.json())

app.get('/api/students', (req, res) => {
    res.status(200).json(data.students)
});

app.get("/api/students/add", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "./form.html"));
})

app.post("/api/students/add", (req, res) => {
    data.students.push(req.body);
    res.redirect("/api/students");
});

app.delete("/api/students/delete/:id", (req, res) => {
    _.remove(data.students, (e) => {
        return Number(e.id) === Number(req.params.id);
    })
    res.json({status: "success"});
});

app.listen(5000, () => {
    console.log("Server listening on port 5000...");
});