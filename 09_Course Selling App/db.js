import mongoose, { Schema as _Schema, Types, model } from "mongoose";

mongoose.connect("mongodb+srv://Ritesh:cYmTlvBhjwz50gUU@cluster0.z1cuupu.mongodb.net/course_selling")

const Schema = _Schema;
const ObjectId = Types.ObjectId;

const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});

export const userModel = model("user", userSchema);
export const adminModel = model("admin", adminSchema);
export const courseModel = model("course", courseSchema);
export const purchaseModel = model("purchase", purchaseSchema);

export default {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}