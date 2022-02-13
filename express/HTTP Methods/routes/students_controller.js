const express = require('express')
const router = express.Router();
const controllers = require("../controllers/students")

router.get('/', controllers.getStudents);

router.get("/add", controllers.addStudentForm)

router.post("/add", controllers.addStudent);

router.delete("/delete/:id", controllers.delStudent);

module.exports = router