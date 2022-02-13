const express = require('express')
const data = require("../../data_");
const path = require("path");
const _ = require("lodash");
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(data.students)
});

router.get("/add", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "../form.html"));
})

router.post("/add", (req, res) => {
    data.students.push(req.body);
    res.redirect("/api/students");
});

router.delete("/delete/:id", (req, res) => {
    _.remove(data.students, (e) => {
        return Number(e.id) === Number(req.params.id);
    })
    res.json({status: "success"});
});

module.exports = router