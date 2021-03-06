const express = require('express');
const app = express()

const data = require('./data')

app.get('/', (req, res) => {
    res.send("<h1><a href='/api/students'>Students</a></h1>" +
        "<h2><a href='/api/courses'>Courses</a></h2>");
})

app.get("/api/students", (req, res) => {
    res.json(data.students.map((student) => {
        const {name} = student;
        return {name};
    }));
});

app.get("/api/courses", (req, res) => {
    res.json(data.courses.map((course) => {
        const {name} = course;
        return {name};
    }));
});

app.get("/api/students/:id", (req, res) => {
    const student = data.students.find((student) => student.id === Number(req.params.id));
    if (!student) {
        return res.status(404).send("<h1>404 : Data not found!</h1>")
    }
    res.json(student)
});

app.get("/api/courses/:id", (req, res) => {
    const course = data.courses.find((course) => course.id === Number(req.params.id));
    if (course) {
       return res.json(course);
    }
    res.status(404).send("<h1>404 : Data not found!</h1>");
});

app.listen(5000, () => {
    console.log("Listening at port 5000...")
})