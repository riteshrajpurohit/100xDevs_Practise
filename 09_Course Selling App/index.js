import express from 'express';
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { userRouter} = require("./routes/user.js")
const { courseRouter} = require("./routes/courses.js")
const { adminRouter} = require("./routes/admin.js")

mongoose.connect("");

const app = express();
app.use(express.json());

app.use("/user" , userRouter);
app.use("/course" , courseRouter);
app.use("/admin" , adminRouter);



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})