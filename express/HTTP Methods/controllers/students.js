const data = require("../../data_");
const path = require("path");
const _ = require("lodash");

const getStudents = (req, res) => {
    res.status(200).json(data.students)
};

const addStudentForm = (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, "../form.html"));
};

const addStudent = (req, res) => {
    data.students.push(req.body);
    res.redirect("/api/students");
};

const delStudent = (req, res) => {
    _.remove(data.students, (e) => {
        return Number(e.id) === Number(req.params.id);
    })
    res.json({status: "success"});
};

module.exports = {getStudents, addStudentForm, addStudent, delStudent}