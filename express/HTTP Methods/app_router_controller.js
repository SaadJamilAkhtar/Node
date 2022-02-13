const express = require('express');
const app = express();
const students = require('./routes/students_controller')

// parse form data
app.use(express.urlencoded({extended: false}))
// parse json
app.use(express.json())

app.use('/api/students', students);


app.listen(5000, () => {
    console.log("Server listening on port 5000...");
});