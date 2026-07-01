
import express from 'express';
import mongoose from "mongoose" ;
import { userRouter } from "./routes/user.js";
import { courseRouter } from "./routes/courses.js";
import { adminRouter } from "./routes/admin.js";

const app = express();
app.use(express.json());

app.use("/user" , userRouter);
app.use("/course" , courseRouter);
app.use("/admin" , adminRouter);


await mongoose.connect("mongodb+srv://Ritesh:cYmTlvBhjwz50gUU@cluster0.z1cuupu.mongodb.net/course_selling")
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})