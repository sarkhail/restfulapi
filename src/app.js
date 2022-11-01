const express = require("express");
const app = express();
require("./db/conn");
const Student = require("./models/students");
const studentRouter = require("./router/student");

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(studentRouter);

  
app.listen(port, () => {
    console.log (`connecttion is setup at ${port}`)
})